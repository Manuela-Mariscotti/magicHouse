import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(
    private router: Router,
    public userService: UserServiceService) { }

  navigate(where:string){
    this.router.navigateByUrl(where)
  }

  ngOnInit(): void {
    !this.userService.logged ? this.router.navigateByUrl('/login') : null
  }

}
