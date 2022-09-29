import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  constructor(
    private userService : UserServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    !this.userService.logged ? this.router.navigateByUrl('/login') : null

  }

}
