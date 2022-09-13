import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCrearComponent } from 'src/app/components/dialogs/dialog-crear/dialog-crear.component';
import { DialogUnirteComponent } from 'src/app/components/dialogs/dialog-unirte/dialog-unirte.component';


@Component({
  selector: 'app-crear-hogar',
  templateUrl: './crear-hogar.component.html',
  styleUrls: ['./crear-hogar.component.css']
})
export class CrearHogarComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  
  crearHogar(){
    const dialogo1 = this.dialog.open(DialogCrearComponent)
  };
  unirteCodigo(){
    const dialogo2 = this.dialog.open(DialogUnirteComponent)
  }

  

  ngOnInit(): void {
  }

}
