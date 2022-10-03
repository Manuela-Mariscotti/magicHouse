import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url: string = 'https://api-magic--house.herokuapp.com';
  // private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getNextEvent(id_hogar:number){
    return this.http.get(this.url + `/nextEvent?id_hogar=${id_hogar}`);
  }

  getPendingTasks(id_user: number){
    return this.http.get(this.url + `/pendingTasks?id_user=${id_user}`)
  }
}
