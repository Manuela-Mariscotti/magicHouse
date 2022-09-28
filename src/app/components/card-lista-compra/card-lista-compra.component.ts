import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-lista-compra',
  templateUrl: './card-lista-compra.component.html',
  styleUrls: ['./card-lista-compra.component.css']
})
export class CardListaCompraComponent implements OnInit {

  @Input() info : any;
  @Output() alertaItem =  new EventEmitter<number>();

  constructor() { }

  deleteByIdProduct(id_product:number){
    this.alertaItem.emit(id_product);
  }

  ngOnInit(): void {
  }

}
