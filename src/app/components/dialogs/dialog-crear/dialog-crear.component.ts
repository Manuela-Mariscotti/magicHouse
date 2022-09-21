import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ApiResponse } from 'src/app/models/api-response';
import { HogarService } from 'src/app/shared/hogar.service';
import { Hogar } from 'src/app/models/hogar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-crear',
  templateUrl: './dialog-crear.component.html',
  styleUrls: ['./dialog-crear.component.css']
})
export class DialogCrearComponent implements OnInit {

  public newHogarForm : FormGroup

  constructor(
    private router : Router,
    private HogarService : HogarService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogCrearComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) {
    this.buildForm();
  }
   
  newHogar() {
    const form = this.newHogarForm.value
    console.log(form);

    this.HogarService.newHogar(new Hogar(form.name,form.type)).subscribe((res: ApiResponse)=>{
      if (res.error) {
        console.log(res)
      }else {
        console.log("Nuevo hogar creado");
        console.log(res);
        this.goHome(); 
      }
    })
  }

  private buildForm() {
    this.newHogarForm = this.formBuilder.group({
      name : [,Validators.required],
      type : [,Validators.required]
    })
  }
  
  goHome(){
    this.router.navigateByUrl('') 
  }

  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}