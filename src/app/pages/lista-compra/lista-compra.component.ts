import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogListaCompraComponent } from 'src/app/components/dialogs/dialog-lista-compra/dialog-lista-compra.component';
import { ApiResponse } from 'src/app/models/api-response';
import { ListaCompraService } from 'src/app/shared/lista-compra.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

    
  // items = [
  //   {title: "Pan"},
  //   {title: "Leche"},
  //   {title: "Huevos"},
  //   {title: "Aceite"},
  //   {title: "1/2 tomate pera"},
  //   {title: "Wisky"},
  //   {title: "Pastillas"},
  //   {title: "Papel de fumar"},
  //   {title: "Hielos"},
  //   {title: "Coca-cola"},
  //   {title: "Chope"},
  //   {title: "Sombrero cowboy"},
  //   {title: "Una vida"},
  // ]
  public items = [] //-- PASAR A ONINIT EL LLAMADO DE LA INFO PARA QUE DESPUES SE LO USE EN AFTERCLOSE DEL DIALOG Y ASI RECARGAR LA VISTA
  public id_hogar : number;

  constructor(public dialog:MatDialog,
    private userService : UserServiceService,
    private listaCompraService : ListaCompraService) { 

      this.id_hogar = this.userService.getUserData().id_hogar
      console.log(this.id_hogar);
      
      this.listaCompraService.getListaCompraByHome(this.id_hogar).subscribe((res : ApiResponse) =>{
        if (res.error) {
          console.log(res);
        } else {
          console.log(res.data);
          this.items = res.data
        }
      })
    }

  addItem(){
    const dialogo = this.dialog.open(DialogListaCompraComponent)
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
  }

}
