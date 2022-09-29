import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiResponse } from 'src/app/models/api-response';
import { UserServiceService } from 'src/app/shared/user-service.service';


@Component({
  selector: 'app-dialog-perfil',
  templateUrl: './dialog-perfil.component.html',
  styleUrls: ['./dialog-perfil.component.css']
})
export class DialogPerfilComponent implements OnInit {

  public editUserForm : FormGroup;
  public id_user: number;


  constructor(
    public formBuilder : FormBuilder,
    public dialogRef : MatDialogRef<DialogPerfilComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    public userService : UserServiceService
    ) { 
      this.buildForm();
    }

  public buildForm(){
    this.editUserForm = this.formBuilder.group({
      username : [,Validators.required],
      email : [,Validators.required]
    })
  }

  editUserById(){
    const form = this.editUserForm.value;

    this.userService.editUserById(this.id_user,form.username,form.email).subscribe((res:ApiResponse)=>{
      console.log(res);

    })
  }

  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.id_user = this.userService.getUserData().id_user;

  }

}