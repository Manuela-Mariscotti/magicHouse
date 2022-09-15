import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {

  @Input() event:any;

  constructor() { }

  ngOnInit(): void {
  }

}
