import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gastos = [
    {title: 'Luz', importe: 100},
    {title: 'Agua', importe: 50},
    {title: 'Internet', importe: 50},
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(where:string){
    this.router.navigateByUrl(where)
  }
}
