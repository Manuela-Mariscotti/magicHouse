import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/models/notificacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notificaciones: Notificacion[] = [
    new Notificacion('Calendario', 'Cita con el medico a las 16:00', 'event'),
    new Notificacion('Tareas', 'Te toca fregar el suelo', 'task'),
    new Notificacion('Calendario', 'Cumpleanos del gato', 'event'),
  ];

  constructor() {}

  deleteNotification(notif:Notificacion){
    let i = this.notificaciones.findIndex( (element) => element.description == notif.description);
    this.notificaciones.splice(i,1);
    console.log(i)
  }

  ngOnInit(): void {}
}
