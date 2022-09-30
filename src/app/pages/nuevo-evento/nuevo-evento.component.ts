import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/shared/events.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {

  public title
  public date
  public description

  private id_user;

  constructor(private eventsService: EventsService, private userService: UserServiceService, private router: Router) {
    this.id_user = this.userService.getUserData().id_user
   }

  create(){

    let event = new Event(this.date, this.title, this.description);
    console.log(event);
    
    this.eventsService.createEvent(event, this.id_user).subscribe( (response: ApiResponse) => {
      this.router.navigateByUrl('calendario');
    });
  }

  ngOnInit(): void {

  }

}
