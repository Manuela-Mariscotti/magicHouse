import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor(private router:Router) { }

  navigate(where:string){
    this.router.navigateByUrl(where);
  }

  ngOnInit(): void {
  }

}
