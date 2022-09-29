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
        this.userService.logged = true;
        this.userService.setUserData(res.data);
        console.log(res.data[0]);
        
        res.data[0].id_hogar ? this.goHome() : this.goCrearHogar();
      }else{
        console.log('datos erroneos');
      }

    });
  }
  goCrearHogar(){
    this.router.navigateByUrl('/crear-hogar')
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
