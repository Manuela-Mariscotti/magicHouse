import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogPerfilComponent } from 'src/app/components/dialogs/dialog-perfil/dialog-perfil.component';
import { ApiResponse } from 'src/app/models/api-response';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  public user : User;

  constructor(
    public dialog : MatDialog,
    private userService : UserServiceService,
    private router :Router
  ) { }

  editUser(){
    const dialog = this.dialog.open(DialogPerfilComponent).afterClosed().subscribe((res : ApiResponse)=>{
     
      this.ngOnInit();
       console.log(this.user);

    })
  }
  
  deleteUserById(){
    this.userService.deleteUserById(this.user.id_user).subscribe((res : ApiResponse)=>{
      console.log(res);
      this.goLogin();
    })
  }

  goLogin(){
    this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
    
    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    let userData =this.userService.getUserData()
    this.userService.getUserById(this.userService.getUserData().id_user).subscribe((res : ApiResponse)=>{
      let data = res.data
      this.userService.setUserData(data)
      
      console.log(this.userService.getUserData());
      this.user = this.userService.getUserData() 
      console.log(this.user);
    })
    

    
  }

}