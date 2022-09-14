import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-gasto',
  templateUrl: './card-gasto.component.html',
  styleUrls: ['./card-gasto.component.css']
})
export class CardGastoComponent implements OnInit {

  @Input() info:any;

  constructor() { }

  ngOnInit(): void {
  }

}
