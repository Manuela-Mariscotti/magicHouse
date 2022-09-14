import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css'],
})
export class CalendarComponentComponent implements OnInit {
  date = new Date();

  month = this.date.getMonth();
  day = this.date.getDate();
  year = this.date.getFullYear();

  diasPorMes = new Date(this.year, this.month, 0).getDate();
  public primerDiaMes = new Date(this.year, this.month, 1).getDay();

  semanas = this.diasPorMes / 7;
  semanas_resto = this.diasPorMes % 7;

  constructor() {

    console.log(this.getCalendar())
  }

  getCalendar() {
    let result: Date[][] = [];

    let dia = 1;
    let tmp = []

   if(result.length == 0 && tmp.length < 7){

     for (let i = 0; i < this.primerDiaMes; i++) {
       tmp.push(0);
     }

     let i = 0
     while( i >= this.primerDiaMes && tmp.length < 7){
       tmp.push(new Date(this.year, this.month, dia))
       dia++;
       
      }
    }else{
      result.push(tmp)
    } 
    
    return result    

  }

  ngOnInit(): void {}
}
