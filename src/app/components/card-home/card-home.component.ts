import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notificacion } from 'src/app/models/notificacion';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input() info:any;
  @Output() onDelete = new EventEmitter<Notificacion>()

  constructor() { }

  borrar(){
    this.onDelete.emit(this.info);
  }

  ngOnInit(): void {
  }

}
