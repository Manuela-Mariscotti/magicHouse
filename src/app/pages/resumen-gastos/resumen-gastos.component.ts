import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { response } from 'express';
import { DialogPagadoComponent } from 'src/app/components/dialogs/dialog-pagado/dialog-pagado.component';
import { ApiResponse } from 'src/app/models/api-response';
import { SpentsService } from 'src/app/shared/spents.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-resumen-gastos',
  templateUrl: './resumen-gastos.component.html',
  styleUrls: ['./resumen-gastos.component.css']
})
export class ResumenGastosComponent implements OnInit {

  transactions

  constructor(private spentsService: SpentsService, private userService: UserServiceService, public dialog: MatDialog) { }

  confirm(){
    const dialog = this.dialog.open(DialogPagadoComponent)
  }
  
  ngOnInit(): void {
    const id_hogar = this.userService.getUserData().id_hogar

    this.spentsService.isTransacionsUpdated(id_hogar).subscribe( (response: ApiResponse) => {
      
      if(!response.data){

        this.spentsService.divideSpents(id_hogar).subscribe( (response :ApiResponse) => {
          console.log('creando transacciones');
          this.transactions = response.data;
          console.log(this.transactions)

        });

      } else {

        this.spentsService.getTransactionsFromDB(id_hogar).subscribe( (response: ApiResponse) => {
          console.log('descargando transacciones');
          this.transactions = response.data
          console.log(this.transactions)
        });
      }

    });

  }

}
