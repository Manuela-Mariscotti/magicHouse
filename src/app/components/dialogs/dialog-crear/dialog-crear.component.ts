import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-crear',
  templateUrl: './dialog-crear.component.html',
  styleUrls: ['./dialog-crear.component.css']
})
export class DialogCrearComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCrearComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { }
  
  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}