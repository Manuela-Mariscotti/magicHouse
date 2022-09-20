import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private url: string = 'https://api-magic--house.herokuapp.com';
  // private url: string  = "http://localhost:8080"
  public logged = false;
  private user: User;

  constructor(private http: HttpClient) {}

  insertUser(user:User){
    return this.http.post(this.url + '/registro',user)
  }

  login(user: User) {
    return this.http.post(this.url + '/login', user);
  }

  test() {
    return this.http.get(this.url + '/');
  }

  setUserData(data: any[]) {
    this.user = new User();
    let userData = data[0];

    this.user.username = userData.name;
    this.user.password = userData.password;
    this.user.email = userData.email;
    this.user.type = userData.type;
    this.user.id_hogar = userData.id_hogar;
  }

  getUserData() {
    return this.user ? this.user : null
  }
}
