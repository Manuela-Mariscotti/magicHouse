import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css'],
})
export class CalendarComponentComponent implements OnInit {

  style;

  daySelected;
  dateSelected;

  dias_semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domin']

  events = [
    {
      date: moment.utc('2022-09-25'),
      title: 'Cita con el medico',
      description: 'XXXXXX'
    },
    {
      date: moment.utc('2022-09-21'),
      title: 'Cita con el medico',
      description: 'XXXXXX'
    } 
  ];

  constructor() {
    let date = new Date()
    this.getMonth(date.getMonth()+1, date.getFullYear())
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

        
        return e.date.format('YYYY-MMMM-D') == dayObject.format('YYYY-MMMM-D');

      })

      console.log(events)


      return {
        name: dayObject.format('dddd'),
        value: day,
        weekDay: dayObject.isoWeekday(),
        events: events.length > 0 ? events : null
      }
    })
    

    for(let i = 1; i < startDay.isoWeekday(); i++){
      days.unshift({name:null, value: '', weekDay: -1, events: null})
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

  showEvent(day:any){
    console.log(day)
  }

  ngOnInit(): void {}
}
