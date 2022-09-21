import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse } from 'src/app/models/api-response';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-card-gasto',
  templateUrl: './card-gasto.component.html',
  styleUrls: ['./card-gasto.component.css']
})
export class CardGastoComponent implements OnInit {

  @Input() info:any;
  username;

  constructor(private userService: UserServiceService) { 

    }
    
    ngOnInit(): void { 
      let id_user = this.info.id_user;

      this.userService.getUserById(id_user).subscribe( (response: ApiResponse) => {
        this.username = response.data[0].username;
      
        console.log(response)
      })
  }

}
