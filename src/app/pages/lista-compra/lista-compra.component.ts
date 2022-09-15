import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogListaCompraComponent } from 'src/app/components/dialogs/dialog-lista-compra/dialog-lista-compra.component';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  items = [
    {title: "Pan"},
    {title: "Leche"},
    {title: "Huevos"},
    {title: "Aceite"},
    {title: "1/2 tomate pera"},
    {title: "Wisky"},
    {title: "Pastillas"},
    {title: "Papel de fumar"},
    {title: "Hielos"},
    {title: "Coca-cola"},
    {title: "Chope"},
    {title: "Sombrero cowboy"},
    {title: "Una vida"},
    
  ]

  constructor(public dialog:MatDialog) { }

  addItem(){
    const dialogo = this.dialog.open(DialogListaCompraComponent)
  }

  ngOnInit(): void {
  }

}
