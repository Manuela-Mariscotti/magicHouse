import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public document;

  constructor(@Inject(DOCUMENT) document:any) {
    console.log(document.location.href);
    
    this.document = document

  }
  
  ngOnInit(): void {
  }
}