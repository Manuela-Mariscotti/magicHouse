import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css'],
})
export class CardEventComponent implements OnInit {
  @Input() event: any;
  @Output() onEdit = new EventEmitter<Event>();
  @Output() onDelete = new EventEmitter<Event>();

  constructor() {}

  edit() {
    this.onEdit.emit(this.event);
  }
  
  delete() {
    this.onDelete.emit(this.event);
  }

  ngOnInit(): void {}
}
