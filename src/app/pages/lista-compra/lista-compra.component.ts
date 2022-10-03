import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogListaCompraComponent } from 'src/app/components/dialogs/dialog-lista-compra/dialog-lista-compra.component';
import { ApiResponse } from 'src/app/models/api-response';
import { ListaCompraService } from 'src/app/shared/lista-compra.service';
import { SpentsService } from 'src/app/shared/spents.service';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Spent } from 'src/app/models/spent';
import { Moment } from 'moment';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  public addGastoCompraForm : FormGroup;
  public items = [] ;
  public id_hogar : number;
  public id_user : number;
  public compra : Spent;
  public checked = [];

  constructor(
    public router : Router,
    public dialog : MatDialog,
    private userService : UserServiceService,
    private listaCompraService : ListaCompraService,
    private spentService : SpentsService,
    private formBuilder : FormBuilder) 
  { 
      this.buildForm();
  }

  addGastoCompra(){
    
    let temporal = this.items.filter( item=> !item.checked )
    console.log(temporal);
    this.items = temporal

    this.checked.forEach((item)=>{
      this.listaCompraService.deleteByIdProduct(item.id_product).subscribe((res : ApiResponse)=>{
        console.log(res.data);
        
      })
    })

    const form = this.addGastoCompraForm.value
    let date = moment().format('YYYY-M-D')
    console.log(date);

    this.compra = new Spent ("Compra día :"+date, date,this.id_user,this.id_user,form.compra )
    
    this.spentService.postSpent(this.compra, this.id_hogar).subscribe((res : ApiResponse) => {
      console.log(res);
    })

  }

  getChecked(info:any){
    if (info.checked) {
      this.checked.push(info)
    } else {
      let i = this.checked.findIndex((item)=>{
        return item.id_product == info.id_product
      });
      if (i != -1) {
        this.checked.splice(i,1)
      }
    }
    return this.checked
  }

  private buildForm() {
    this.addGastoCompraForm = this.formBuilder.group({
      compra : [,Validators.required]
    })
  }

  addItem(){
    const dialogo = this.dialog.open(DialogListaCompraComponent).afterClosed().subscribe((data : any)=>{
      this.ngOnInit();
    })
  }

  deleteByIdProduct2(id_product:number){
    this.listaCompraService.deleteByIdProduct(id_product).subscribe((res : ApiResponse)=>{
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id_product == id_product) {
          this.items.splice(i,1)
        }
      }
      console.log("Producto eliminado de la lista");
      console.log(res);
    })
  }


  ngOnInit(): void {

    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    this.id_hogar = this.userService.getUserData().id_hogar

    this.id_user = this.userService.getUserData().id_user
    
    this.listaCompraService.getListaCompraByHome(this.id_hogar).subscribe((res : ApiResponse) =>{
      if (res.error) {
        console.log(res);
      } else {
        console.log(res.data);
        this.items = res.data.reverse();
        this.items.forEach((item)=>{
          console.log(item);
          
        })
      }
    })
  }

}
