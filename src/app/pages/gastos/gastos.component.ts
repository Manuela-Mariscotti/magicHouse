import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(where:string){
    this.router.navigateByUrl(where)
  }
}
