import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notificacion } from 'src/app/models/notificacion';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input() info:any;
  @Output() onDelete = new EventEmitter<Notificacion>()
  

  constructor(private userService : UserServiceService) { }

  testApi(){
    // let data = 
    this.userService.test().subscribe((data:any)=>{
      console.log(data);
      // return data
      
    })
  }

  borrar(){
    this.onDelete.emit(this.info);
  }

  ngOnInit(): void {
  }

}
