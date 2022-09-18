import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public location;
  public document;

  constructor(private router: Router, @Inject(DOCUMENT)document:any) {

    this.document = document

   }

  navigate(where: string){
    this.router.navigateByUrl(where)
  }

  ngOnInit(): void {
  }

}
