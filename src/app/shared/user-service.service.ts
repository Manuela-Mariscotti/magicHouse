import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url : string = "https://api-magic--house.herokuapp.com"

  constructor( private http : HttpClient) { }

  test(){
    return this.http.get(this.url+"/")
  }
}
