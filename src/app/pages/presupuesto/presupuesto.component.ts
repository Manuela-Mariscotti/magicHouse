import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPresupuestoComponent } from 'src/app/components/dialogs/dialog-presupuesto/dialog-presupuesto.component';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  gastos = [
    {title: "Luz", importe: 100, saldo: 400},
    {title: "Agua", importe: 50, saldo: 450},
    {title: "Internet", importe: 50, saldo: 500},
    {title: "Calcetines", importe: 100, saldo: 600},
    {title: "Mercadona", importe: 100, saldo: 700},
    {title: "Luz", importe: 100, saldo: 400},
    {title: "Agua", importe: 50, saldo: 450},
    {title: "Internet", importe: 50, saldo: 500},
    {title: "Calcetines", importe: 100, saldo: 600},
    {title: "Mercadona", importe: 100, saldo: 700}
  ]

  constructor(public dialog:MatDialog) { }

  editarPresu(){
    const dialogo = this.dialog.open(DialogPresupuestoComponent)
  }

  ngOnInit(): void {
  }

}
