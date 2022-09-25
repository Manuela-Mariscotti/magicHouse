import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-pagado',
  templateUrl: './dialog-pagado.component.html',
  styleUrls: ['./dialog-pagado.component.css']
})
export class DialogPagadoComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogPagadoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any)
  {
    
  }

  confirmar() {
    this.dialogRef.close({confirmed: true, data: this.data});
  }cancelar() {
    this.dialogRef.close({confirmed: false});
  }

  ngOnInit(): void {
  }

}
