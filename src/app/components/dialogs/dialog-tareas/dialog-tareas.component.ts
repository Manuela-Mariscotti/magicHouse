import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiResponse } from 'src/app/models/api-response';
import { TasksService } from 'src/app/shared/tasks.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-dialog-tareas',
  templateUrl: './dialog-tareas.component.html',
  styleUrls: ['./dialog-tareas.component.css']
})
export class DialogTareasComponent implements OnInit {

  dia:string;
  tarea:string;


  constructor(public dialogRef:MatDialogRef<DialogTareasComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any, private taskService: TasksService, private userService: UserServiceService)
  {
    console.log(data)
  }
  
  cancelar() {
    this.dialogRef.close();
  }
  

  doTask(){
    let task = {
      id_task: this.data.tarea.id_task,
      day: this.data.dia,
      id_hogar: this.userService.getUserData().id_hogar
    }

    this.taskService.doTask(task).subscribe(res => {
      console.log(res);
      this.dialogRef.close(0)
    })
  }

  deleteTask(){
    let task = {
      id_task: this.data.tarea.id_task,
      day: this.data.dia,
      id_user: this.userService.getUserData().id_user
    }

    this.taskService.deleteTask(task).subscribe((res : ApiResponse)=>{
      this.dialogRef.close(0);
      console.log(res);
      
    })


  }


  ngOnInit(): void {
    console.log(this.data)
    this.tarea = this.data.tarea.taskname;
    
    switch(this.data.dia){

      case 'L' :
        this.dia = 'Lunes';
        break;
      case 'M' :
        this.dia = 'Martes';
        break;
      case 'X' :
        this.dia = 'Miercoles';
        break;
      case 'J' :
        this.dia = 'Jueves';
        break;
      case 'V' :
        this.dia = 'Viernes';
        break;
      case 'S' :
        this.dia = 'Sabado';
        break;
      case 'D' :
        this.dia = 'Domingo';
        break;
      
    }
  }

}
