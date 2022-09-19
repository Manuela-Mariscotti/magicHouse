import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // private url: string = 'https://api-magic--house.herokuapp.com';
  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  get(user_id:number){
    return this.http.get(this.url + `/notifications?id_user=${user_id}`)
  }
}
