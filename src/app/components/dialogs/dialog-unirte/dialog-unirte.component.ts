import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { HogarService } from 'src/app/shared/hogar.service';

@Component({
  selector: 'app-dialog-unirte',
  templateUrl: './dialog-unirte.component.html',
  styleUrls: ['./dialog-unirte.component.css']
})
export class DialogUnirteComponent implements OnInit {

  public joinHogarForm : FormGroup
  public id_user: number;

  constructor(
    private formBuilder : FormBuilder,
    public dialogRef: MatDialogRef<DialogUnirteComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) {
    this.buildForm();
   }

  joinHogar() {
    const form= this.joinHogarForm.value;
    console.log(form);
        
  }

  private buildForm() {
    this.joinHogarForm = this.formBuilder.group({
      id_hogar : [,Validators.required]
    })
  }

  cancelar() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
