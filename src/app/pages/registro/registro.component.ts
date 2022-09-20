import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { NgForm,ReactiveFormsModule,FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  

  public registroForm: FormGroup
  public cartelHidden : boolean = true;


  constructor(private userService : UserServiceService,private formBuilder: FormBuilder,private router:Router) {
    this.buildForm();
   }
  
  insertUser(){
    const form = this.registroForm.value
    console.log(form);

    this.userService.insertUser(new User(form.nombre,form.password,form.email)).subscribe((res: ApiResponse)=>{
      console.log("Registro exitoso");      
      console.log(res);
      this.cartelHidden = false;
    })
  }

  private buildForm(){
    const minPassLength = 8;

    this.registroForm = this.formBuilder.group({
      nombre: [,Validators.required],
      email: [,[Validators.required, Validators.email]],
      password: [,[Validators.required, Validators.minLength(minPassLength)]],
      password2: [,[Validators.required,this.checkPasswords]],
      terminos: [,[Validators.requiredTrue]]
    })
  }

  private checkPasswords(control: AbstractControl){
    let resultado = {matchPassword : true};

    if(control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  goLogin(){
     this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
  }

}
