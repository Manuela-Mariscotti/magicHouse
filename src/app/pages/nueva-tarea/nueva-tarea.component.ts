import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ApiResponse } from 'src/app/models/api-response';
import { TasksService } from 'src/app/shared/tasks.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css'],
})
export class NuevaTareaComponent implements OnInit {
  users = [] //= ['User1', 'User2', 'User3'];
  tasks = [] //= ['barrer suelo', 'fregar suelo','fregar platos','poner lavadora','pasear al perro','caja del gato','limpiar cristales','cocinar','planchar','limpiar baño','recoger'];
  days: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  public newTaskForm : FormGroup
  public cartelHidden : boolean = true;
  
  constructor(
    private userService : UserServiceService,
    private router : Router,
    private formBuilder: FormBuilder,
    private TaskService: TasksService
  ) {
    this.buildForm();
    }
  
  usersByHome(){
    this.userService.getUserNames()
  }

  newTask(){
    const form = this.newTaskForm.value;
    console.log(form);

    this.TaskService.newTask(form.id_user,form.id_task,form.day).subscribe((res: ApiResponse)=>{
      if (res.error) {
        console.log(res)
      }else {
        console.log("Nuevo tarea asignada");
        console.log(res);
        // this.cartelHidden = false
        this.router.navigateByUrl('tareas')

      }
    })
  }

  private buildForm() {
    this.newTaskForm = this.formBuilder.group({
      id_user : [,Validators.required],
      id_task : [,Validators.required],
      day : [,Validators.required]
    })
  }

  goTasks(){
    this.router.navigateByUrl('/tareas') 
  }

  ngOnInit(): void {

    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    this.userService.getUserNames().subscribe((res : ApiResponse) =>{
      this.users = res.data;
      console.log(this.users);
    })
    this.TaskService.getTasks().subscribe((res : ApiResponse)=>{
      this.tasks = res.data;
      console.log(this.tasks);
    })
  }
}
