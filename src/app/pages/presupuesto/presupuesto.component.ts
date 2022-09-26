import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog:MatDialog, private userService: UserServiceService, private budgetService: BudgetService) { }

  editarPresu(){
    const dialogo = this.dialog.open(DialogPresupuestoComponent)
  }

  getBudget(){
    const id_hogar = this.userService.getUserData().id_user;
    this.budgetService.getBudgetPercent(id_hogar).subscribe( (response: ApiResponse) => {
      let data = response.data;

      this.budget= data.budget;
      this.remaining = (data.budget - data.spents);

      this.value =  (this.remaining * 100) / this.budget
      console.log(this.value);
    })
  }
  ngOnInit(): void {
    this.getBudget()
  }

}
