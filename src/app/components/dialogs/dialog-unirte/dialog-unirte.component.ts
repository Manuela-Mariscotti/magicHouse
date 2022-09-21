import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { HogarService } from 'src/app/shared/hogar.service';
import { ApiResponse } from 'src/app/models/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-unirte',
  templateUrl: './dialog-unirte.component.html',
  styleUrls: ['./dialog-unirte.component.css']
})
export class DialogUnirteComponent implements OnInit {

  public joinHogarForm : FormGroup
  public id_user;

  constructor(
    private router : Router,
    private userService : UserServiceService,
    private hogarService : HogarService,
    private formBuilder : FormBuilder,
    public dialogRef: MatDialogRef<DialogUnirteComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) {
    this.buildForm();

   }

  joinHogar() {
    const form= this.joinHogarForm.value;
    console.log(form);
    
    this.hogarService.joinHogar(form.id_hogar,this.id_user).subscribe((res: ApiResponse)=>{
      if (res.error) {
        console.log(res);      
      }else {
        console.log("Id_hogar asignada.");
        console.log(res);
        this.goHome(); 
      }
    })
        
  }

  private buildForm() {
    this.joinHogarForm = this.formBuilder.group({
      id_hogar : [,Validators.required]
    })
  }

  goHome(){
    this.router.navigateByUrl('') 
  }

  cancelar() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
   
    this.id_user = this.userService.getUserData().id_user
  
  }

}
