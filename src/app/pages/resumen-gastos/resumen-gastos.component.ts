import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(private spentsService: SpentsService, private userService: UserServiceService, public dialog: MatDialog, private router: Router) { }

  confirm(transaction){
    const dialog = this.dialog.open(DialogPagadoComponent, {data:transaction})
      .afterClosed().subscribe( (dialogResponse: any) => {

        if(dialogResponse.confirmed){
          dialogResponse.data.id_hogar = this.userService.getUserData().id_hogar; 
          this.confirmPayment(dialogResponse.data)
        }
      })
  }
  
  confirmPayment(data: any) {
    data.isDone = true;
    this.spentsService.doTransaction(data).subscribe( (response: ApiResponse) => {
      console.log(response)
      this.ngOnInit()
    })
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

