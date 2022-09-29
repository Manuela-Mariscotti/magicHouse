import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-setting',
  templateUrl: './card-setting.component.html',
  styleUrls: ['./card-setting.component.css']
})
export class CardSettingComponent implements OnInit {

  @Input () info : any
  @Output () onDeleteUser = new EventEmitter<number>();

  constructor() { }

  deleteUser(id_user:number){
    this.onDeleteUser.emit(id_user)

  }

  ngOnInit(): void {
  }

}
