import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-presupuesto',
  templateUrl: './dialog-presupuesto.component.html',
  styleUrls: ['./dialog-presupuesto.component.css']
})
export class DialogPresupuestoComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef <DialogPresupuestoComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { }

  cancelar() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
