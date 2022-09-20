import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { Spent } from 'src/app/models/spent';
import { SpentsService } from 'src/app/shared/spents.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.component.html',
  styleUrls: ['./nuevo-gasto.component.css']
})
export class NuevoGastoComponent implements OnInit {

  usernames  = [];

  id_user;

  form_spent_title;
  form_spent_value;
  form_spent_user;
  form_spent_date;

  constructor(private spentsService: SpentsService, private userService:UserServiceService, private router:Router) { 
  }

  postSpent(){
    !this.id_user ? this.id_user = this.userService.getUserData().id_user : null
    let spent:Spent = new Spent(this.form_spent_title, this.form_spent_date.toString(),this.form_spent_user ,this.id_user, this.form_spent_value)

    this.spentsService.postSpent(spent).subscribe( (response: ApiResponse) => {
      response.error ? console.log(response) : null
      this.router.navigateByUrl('/gastos')
    })
  }

  ngOnInit(): void {
  this.userService.getUserNames().subscribe( (response: ApiResponse) => {
    this.usernames = response.data
    console.log (this.usernames)
  })
  }

}
