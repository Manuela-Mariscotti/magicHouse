import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { Notificacion } from 'src/app/models/notificacion';
import { NotificationService } from 'src/app/shared/notification.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pendingTasks: Notificacion[] = [];
  nextEvent: Notificacion;


  constructor(private userService : UserServiceService, private notificationService : NotificationService, private router:Router, private http: HttpClient) {

  }

  // deleteNotification(notif:Notificacion){
  //   let i = this.notificaciones.findIndex( (element) => element.description == notif.description);
  //   this.notificaciones.splice(i,1);
  // }

  ngOnInit(): void {
    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    //get nextEvent

    this.notificationService.getNextEvent(this.userService.getUserData().id_hogar).subscribe( (response: ApiResponse) => {
      let eventJSON = response.data.pop();
      eventJSON ? this.nextEvent = new Notificacion(eventJSON.title, eventJSON.description, 'event') : this.nextEvent = null;
    })

    //get pendingTasks

    let id_user = this.userService.getUserData().id_user
    this.notificationService.getPendingTasks(id_user).subscribe( (response: ApiResponse) => {
      let data = response.data;

      data.forEach( (task) => {
        let day

        switch (task.day) {
          case 'L':
            day = 'Lunes'
            break
          case 'M':
            day = 'Martes'
            break;
          case 'X':
            day = 'Miércoles'
            break
          case 'J':
            day = 'Jueves'
            break
          case 'V':
            day = 'Viernes'
            break
          case 'S':
            day = 'Sábado'
            break
          case 'D':
            day = 'Domingo'
            break
          default:
            day = 'Error fetching day'
            break;
        }

        this.pendingTasks.push(new Notificacion(day, task.taskname, 'task'))
      })
    })
    
  }
}
