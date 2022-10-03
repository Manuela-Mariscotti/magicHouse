import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hogar } from '../models/hogar';

@Injectable({
  providedIn: 'root'
})
export class HogarService {

    private url: string = 'https://api-magic--house.herokuapp.com';
    // private url: string  = "http://localhost:8080"
    private hogar : Hogar

  constructor(private http: HttpClient) { }

  newHogar(hogar:Hogar) {
    return this.http.post(this.url+'/hogar', hogar)
  }
  
  joinHogar(id_hogar: number, id_user: number){
    let ids ={
      id_hogar : id_hogar,
      id_user : id_user
    }
    return this.http.put(this.url+'/hogar', ids) 
  }

  getHogarById(id_hogar:number){
    return this.http.get(this.url+'/hogar?id_hogar='+id_hogar)
  }

}
