import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  // private url: string = 'https://api-magic--house.herokuapp.com';
  private url: string = 'http://localhost:8080';

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

    this.user.username = userData.username;
    this.user.password = userData.password;
    this.user.email = userData.email;
    this.user.type = userData.type;
    this.user.id_user = userData.id_user;
    this.user.id_hogar = userData.id_hogar;
  }

  getUserData() {
    return this.user ? this.user : null
  }

  getUserNames(){
    return this.http.get(this.url + `/getUsersByHome?id_hogar=${this.user.id_hogar}`);
  }
  getUserById(id_user:number){
    return this.http.get(this.url + `/userById?id_user=${id_user}`)
  }
  
  deleteUserById(id_user:number){
    return this.http.delete(this.url +'/user?id_user='+id_user);
  }

  editUserById(id_user:number, username:string, email:string){
    let editUser = {
      id_user : id_user,
      username : username,
      email : email
    }
    return this.http.put(this.url+'/user', editUser)
  }


}