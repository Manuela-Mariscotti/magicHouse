import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import * as moment from 'moment';
import { ApiResponse } from 'src/app/models/api-response';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/shared/events.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css'],
})
export class CalendarComponentComponent implements OnInit {

  daySelected;
  dateSelected;

  dias_semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  events = [];
  showingEvents;

  constructor(private eventsService:EventsService, private userService: UserServiceService) {

  }

  getMonth(month:number, year:number) {
    const startDay = moment.utc(`${year}/${month}/01`);
    const endDay = startDay.clone().endOf('month')

    this.daySelected = startDay

    const diff = endDay.diff(startDay, 'days', true);
    const MonthLength = Math.round(diff);

    const arrayDays = Object.keys([...Array(MonthLength)])

    const days = arrayDays.map( (day:any) => {
      day = parseInt(day) + 1;
      const dayObject = moment(`${year}-${month}-${day}`)

      let events = this.events.filter( (e) => {
        return e.date == dayObject.format('YYYY-MM-DD');
      })
     
      
      return {
        name: dayObject.format('dddd'),
        value: day,
        weekDay: dayObject.isoWeekday(),
        events: events.length > 0 ? events : null,
        today: dayObject.format('YYYY-MMMM-D') == moment().format('YYYY-MMMM-D'),
        moment: dayObject
      }
    })


    for(let i = 1; i < startDay.isoWeekday(); i++){
      days.unshift({name:null, value: '', weekDay: -1, events: null, today: false, moment: moment()})
    }

    this.dateSelected = days;
  }

  changeMonth(flag:number){
    if (flag < 0){
      const date = this.daySelected.clone().subtract(1, 'month');
      this.getMonth(date.format('MM'), date.format('YYYY'))
    }else{
      const date = this.daySelected.clone().add(1, 'month');
      this.getMonth(date.format('MM'), date.format('YYYY'))
    }
  }

  showDayEvents(day:any){
    this.showingEvents = day.events
  }

  delete(event:Event){
    let i = this.events.findIndex((e) => e == event); // i = indice de events donde esta el evento
    this.events.splice(i, 1);

    this.showingEvents = this.events.filter((e) => e.date == event.date);

    let j; // j = indice de dateSelcted donde esta el dia del evento
    this.dateSelected.forEach((e, i) => {
      let tmp = -1;
      if (e.events) {
        tmp = e.events.findIndex((element) => element == event);
      }

      if (tmp >= 0) {
        j = i;
      }
    });

    this.dateSelected[j].events.splice(i, 1);
    this.eventsService.deleteEvent(event, this.userService.getUserData().id_user).subscribe( (response:any) => {
      this.ngOnInit()
    })

  }

  ngOnInit(): void {
    this.eventsService.getAll(this.userService.getUserData().id_hogar).subscribe( (response:ApiResponse) => {
      response.data.forEach( (item) => {
        let event = new Event(item.date, item.title, item.description);
        this.events.push(event)
        
        let date = new Date()
        
        this.getMonth(date.getMonth()+1, date.getFullYear())
        console.log("---------");
        console.log(this.events)
        console.log("---------");
        

      })
    });
  }
}
