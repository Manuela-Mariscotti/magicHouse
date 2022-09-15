import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-lista-compra',
  templateUrl: './dialog-lista-compra.component.html',
  styleUrls: ['./dialog-lista-compra.component.css']
})
export class DialogListaCompraComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<DialogListaCompraComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { }

  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
