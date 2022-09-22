import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // private url: string = 'https://api-magic--house.herokuapp.com';
  private url: string  = "http://localhost:8080"


  constructor(private http: HttpClient) { }

  newTask(id_user: number,id_task: number, day:string){
    let user_task = {
      id_user : id_user,
      id_task : id_task,
      day : day
    }
    return this.http.post(this.url+'/task',user_task)
  }

  getTasks(){
    return this.http.get(this.url+'/task')
  }


}