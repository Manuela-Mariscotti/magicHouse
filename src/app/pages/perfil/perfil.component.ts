import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user = [
    {name : "Pepe Soria",
    email : "pepesoria@gmail.com",
    password : "123",
    phone : "688369849",
    birth : "17/03/1987"}
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
