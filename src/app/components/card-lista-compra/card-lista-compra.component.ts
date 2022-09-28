import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-lista-compra',
  templateUrl: './card-lista-compra.component.html',
  styleUrls: ['./card-lista-compra.component.css']
})
export class CardListaCompraComponent implements OnInit {

  @Input() info : any;
  @Output() alertaItem =  new EventEmitter<number>();
  public checked : boolean = false
  @Output() onChangeCheckState = new EventEmitter<any>();

  constructor() { }

  deleteByIdProduct(id_product:number){
    this.alertaItem.emit(id_product);
  }

  setCheckState(info:any, checked: boolean){
    info.checked = checked;
    this.onChangeCheckState.emit(info);
  }

  ngOnInit(): void {
  }

}
