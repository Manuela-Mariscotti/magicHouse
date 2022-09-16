import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public location;

  constructor(@Inject(DOCUMENT) document:any) {

    this.location = document.location.href

  }
  
  ngOnInit(): void {
  }
}