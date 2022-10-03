import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor(
    private router:Router,
    public userService:UserServiceService) { }

  navigate(where:string){
    this.router.navigateByUrl(where);
  }

  ngOnInit(): void {
    !this.userService.logged ? this.router.navigateByUrl('/login') : null
  }

}
