import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTareasComponent } from '../dialogs/dialog-tareas/dialog-tareas.component';

@Component({
  selector: 'app-table-tareas',
  templateUrl: './table-tareas.component.html',
  styleUrls: ['./table-tareas.component.css']
})
export class TableTareasComponent implements OnInit {

  tareas = [
    'Lavar platos',
    'Pasear perro',
    'Limpiar caja del gato',
    'limpiar suelo',
  ]


  constructor(private dialog: MatDialog) { }

  openDialog(td:HTMLTableCellElement){
    const dialog = this.dialog.open(DialogTareasComponent, {data: td})
  }

  ngOnInit(): void {
  }

}
