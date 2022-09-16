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

  constructor(private router: Router, @Inject(DOCUMENT)document:any) {

    this.location = document.location.href;

   }

  navigate(where: string){
    this.router.navigateByUrl(where)
  }

  ngOnInit(): void {
  }

}
