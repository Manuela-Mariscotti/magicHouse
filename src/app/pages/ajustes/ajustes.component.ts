import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { HogarService } from 'src/app/shared/hogar.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  public users : any;
  private id_user : number;
  public hogar : any;
  

  constructor(private userService : UserServiceService, private router : Router, private hogarService : HogarService ) { }

  deleteUser2(id_user:number){
    console.log(id_user);
    this.userService.setHogarNullByIdUser(id_user).subscribe((res : ApiResponse)=>{
      console.log(res);
      this.ngOnInit();
    })
    
  }


  ngOnInit(): void {
    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    this.id_user = this.userService.getUserData().id_user

    this.userService.getUserNames().subscribe((res:ApiResponse)=>{
      console.log(res);
      this.users = res.data
      
    })

    if (!this.hogar) {
      this.hogarService.getHogarById(this.userService.getUserData().id_hogar).subscribe((res : ApiResponse)=>{
        this.hogar = res.data[0]
        
      })
    }

  }

}
