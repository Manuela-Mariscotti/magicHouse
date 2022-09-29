import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  public users : any;
  private id_user : number;

  constructor(private userService : UserServiceService, private router : Router) { }

  deleteUser2(id_user:number){
    console.log(id_user);
    
  }


  ngOnInit(): void {
    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    this.id_user = this.userService.getUserData().id_user

    this.userService.getUserNames().subscribe((res:ApiResponse)=>{
      console.log(res);
      this.users = res.data
      
    })

  }

}
