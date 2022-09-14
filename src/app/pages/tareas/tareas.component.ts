import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(private router: Router) { }

  navigate(where:string){
    this.router.navigateByUrl(where)
  }

  ngOnInit(): void {
  }

}
