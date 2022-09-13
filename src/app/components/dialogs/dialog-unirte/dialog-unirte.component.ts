import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-unirte',
  templateUrl: './dialog-unirte.component.html',
  styleUrls: ['./dialog-unirte.component.css']
})
export class DialogUnirteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUnirteComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { }

  cancelar() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
