import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificaciones:any = [
    {
      title: 'Calendario',
      content: 'Cita con el medico a las 16:00',
      type: 'event'
    },
    {
      title: 'Tareas',
      content: 'Te toca fregar el suelo',
      type: 'task'
    },
    {
      title: 'Calendario',
      content: 'Cumpleanos del gato',
      type: 'event'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
