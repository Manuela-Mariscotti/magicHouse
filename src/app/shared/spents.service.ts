import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spent } from '../models/spent';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class SpentsService {

  private url:string = 'http://localhost:8080'
  // private url: string = 'https://api-magic--house.herokuapp.com';

  constructor(private userService: UserServiceService, private http: HttpClient) {

  }

  postSpent(spent:Spent){
    return this.http.post(this.url + '/newSpent', spent);
  }

  getHomeSpents(id_home:number){
    return this.http.get(this.url + `/getHomeSpents?id_hogar=${id_home}`)
  }
}
