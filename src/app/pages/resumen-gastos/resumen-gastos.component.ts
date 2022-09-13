import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPagadoComponent } from 'src/app/components/dialogs/dialog-pagado/dialog-pagado.component';

@Component({
  selector: 'app-resumen-gastos',
  templateUrl: './resumen-gastos.component.html',
  styleUrls: ['./resumen-gastos.component.css']
})
export class ResumenGastosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  confirm(){
    const dialog = this.dialog.open(DialogPagadoComponent)
  }
  
  ngOnInit(): void {
  }

}
