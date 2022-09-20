import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { Spent } from 'src/app/models/spent';
import { SpentsService } from 'src/app/shared/spents.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gastos = [
    {title: 'Luz', importe: 100},
    {title: 'Agua', importe: 50},
    {title: 'Internet', importe: 50},
  ]

  constructor(private spentsService: SpentsService,private userService: UserServiceService ,private router:Router) { }

  ngOnInit(): void {

    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    this.spentsService.getHomeSpents(this.userService.getUserData().id_hogar).subscribe( (response: ApiResponse) => {
      const spents = []

      response.data.forEach( (item) => {
        const tmp = new Spent(item.title, item.date, item.id_user, item.created_by, item.value);
        spents.push(tmp);
      });

      this.gastos = spents
      console.log(this.gastos)
    });
  }

  navigate(where:string){
    this.router.navigateByUrl(where)
  }
}
