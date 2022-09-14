import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-presu',
  templateUrl: './card-presu.component.html',
  styleUrls: ['./card-presu.component.css']
})
export class CardPresuComponent implements OnInit {

  @Input() info:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
