import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url: string = 'https://api-magic--house.herokuapp.com';
  // private url: string  = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  createEvent(event:Event, created_by:number){
    let formatEvent = JSON.parse( JSON.stringify(event) );
    formatEvent.created_by = created_by

    return this.http.post(this.url + `/events`, formatEvent)
  }

  getAll(id_hogar:number){
    return this.http.get(this.url + `/events?id_hogar=${id_hogar}`)
  }
}
