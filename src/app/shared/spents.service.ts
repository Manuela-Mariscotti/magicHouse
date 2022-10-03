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

  constructor(private http: HttpClient) {

  }


  postSpent(spent:Spent, id_hogar:number){
    return this.http.post(this.url + `/newSpent`, {spent: spent, id_hogar: id_hogar});
  }

  doTransaction(data:any){
    return this.http.post(this.url + `/transactions`, data)
  }

  getHomeSpents(id_home:number){
    return this.http.get(this.url + `/getHomeSpents?id_hogar=${id_home}`)
  }

  divideSpents(id_hogar:number){
    return(this.http.get(this.url + `/divide?id_hogar=${id_hogar}`))
  }

  isTransacionsUpdated(id_hogar:number){
    return this.http.get(this.url + `/isTransactionUpdated?id_hogar=${id_hogar}`)
  }

  getTransactionsFromDB(id_hogar:number){
    return this.http.get(this.url + `/transactions?id_hogar=${id_hogar}`)
  }
}
