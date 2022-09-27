import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiResponse } from 'src/app/models/api-response';
import { User } from 'src/app/models/user';
import { TasksService } from 'src/app/shared/tasks.service';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { DialogTareasComponent } from '../dialogs/dialog-tareas/dialog-tareas.component';

@Component({
  selector: 'app-table-tareas',
  templateUrl: './table-tareas.component.html',
  styleUrls: ['./table-tareas.component.css']
})
export class TableTareasComponent implements OnInit {


  public tareas = [];
  id_hogar:number;

  constructor(
    private dialog: MatDialog,
    private userService : UserServiceService,
    private taskService : TasksService
    ) {
      this.id_hogar = this.userService.getUserData().id_hogar
      console.log(this.id_hogar);
      this.taskService.getTasksByHome(this.id_hogar).subscribe((res : ApiResponse)=>{
        if(res.error){
          console.log(res);
          
        }else{
          console.log(res.data);
          
          this.tareas=res.data
        }
      })
     }

  openDialog(td:HTMLTableCellElement, task:string){

    const dialog_data = {
      td: td,
      task_name: task
    };

    const dialog = this.dialog.open(DialogTareasComponent, {data: dialog_data})
  }

  ngOnInit(): void {
   
  }

}
