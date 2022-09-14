import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-tareas',
  templateUrl: './dialog-tareas.component.html',
  styleUrls: ['./dialog-tareas.component.css']
})
export class DialogTareasComponent implements OnInit {

  dia:string;


  constructor(public dialogRef:MatDialogRef<DialogTareasComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:HTMLTableCellElement)
  {

    switch(data.cellIndex){
      case 1:
        this.dia = 'Lunes';
        break;
      case 2:
        this.dia = 'Martes';
        break;
      case 3:
        this.dia = 'Miercoles';
        break;
      case 4:
        this.dia = 'Jueves';
        break;
      case 5:
        this.dia = 'Viernes'
        break;
      case 6:
        this.dia = 'Sabado'
        break;
      case 7:
        this.dia = 'Domingo'
        break;
    }
    
    console.log(data)
  }

  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
