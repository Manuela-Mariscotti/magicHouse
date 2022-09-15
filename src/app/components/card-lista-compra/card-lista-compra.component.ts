import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lista-compra',
  templateUrl: './card-lista-compra.component.html',
  styleUrls: ['./card-lista-compra.component.css']
})
export class CardListaCompraComponent implements OnInit {

  @Input() info : any;

  constructor() { }

  ngOnInit(): void {
  }

}
