import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiResponse } from 'src/app/models/api-response';
import { ListaCompraComponent } from 'src/app/pages/lista-compra/lista-compra.component';
import { ListaCompraService } from 'src/app/shared/lista-compra.service';
import { UserServiceService } from 'src/app/shared/user-service.service';


@Component({
  selector: 'app-dialog-lista-compra',
  templateUrl: './dialog-lista-compra.component.html',
  styleUrls: ['./dialog-lista-compra.component.css']
})
export class DialogListaCompraComponent implements OnInit {

  public addItemForm : FormGroup;
  public id_user: number;

  constructor(
    public dialogRef : MatDialogRef<DialogListaCompraComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    public userService : UserServiceService,
    private formBuilder : FormBuilder,
    private listaCompraService : ListaCompraService) {
      this.buildForm(); 

  }
  //-- PASAR A ONINIT EN EL LISTA-COMPRA-PAGE EL LLAMADO DE LA INFO PARA QUE DESPUES SE LO USE EN AFTERCLOSE DEL DIALOG Y ASI RECARGAR LA VISTA
  //afeterClosed
  addItemListaCompra(){
    const form = this.addItemForm.value;

    this.listaCompraService.postListaCompra(form.productname, this.id_user).subscribe((res: ApiResponse)=>{
      if (res.error) {
        console.log(res);        
        
      } else {
        console.log("Producto añadido a la lista de la compra.");
                
      }
    })

  }

  private buildForm(){
    this.addItemForm = this.formBuilder.group({
      productname : [,Validators.required]
    })
  }

  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.id_user = this.userService.getUserData().id_user;
  }

}
