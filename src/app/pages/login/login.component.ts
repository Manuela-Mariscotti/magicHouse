import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User;

  constructor(private userService:UserServiceService, private router:Router) { 
    this.user = new User();
    this.goHome();
  }

  login(){
    this.userService.login(this.user).subscribe( (res:ApiResponse) => {
      
      if(res.data.length > 0){
        this.userService.logged = true
        this.userService.setUserData(res.data);
        this.userService.getUserData().id_hogar ?  this.goHome() : this.router.navigateByUrl('/crear-hogar') ;
      }else{
        console.log('datos erroneos');
      }

    });
  }

  goHome(){
    this.userService.logged ? this.router.navigateByUrl('') : null
  }

  register(){
    this.router.navigateByUrl('registro')
  }

  ngOnInit(): void {
  }

}
