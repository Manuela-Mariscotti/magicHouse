import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogPresupuestoComponent } from 'src/app/components/dialogs/dialog-presupuesto/dialog-presupuesto.component';
import { ApiResponse } from 'src/app/models/api-response';
import { BudgetService } from 'src/app/shared/budget.service';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  budget:number ;
  remaining:number;

  value:number;

  constructor(public dialog:MatDialog, private userService: UserServiceService, private budgetService: BudgetService, public router : Router) { }

  postBudget(){
    const dialogo = this.dialog.open(DialogPresupuestoComponent).afterClosed().subscribe( (data:any) => {
      
      this.budgetService.postBudget(data, this.userService.getUserData().id_hogar).subscribe( (response:ApiResponse) => {

        this.ngOnInit()

      });

    });
  }


  getBudget(){

    !this.userService.logged ? this.router.navigateByUrl('/login') : null

    const id_hogar = this.userService.getUserData().id_hogar;
    this.budgetService.getBudgetPercent(id_hogar).subscribe( (response: ApiResponse) => {
      let data = response.data;

      if(data.spents && data.budget){

        this.budget= data.budget;
        this.remaining = (data.budget - data.spents);
        
        this.value =  (this.remaining * 100) / this.budget
      }else{
        this.value = -1
      }
      
      console.log(this.value);
    })
  }
  
  ngOnInit(): void {
    this.getBudget()
  }

}
