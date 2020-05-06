import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['',Validators.required,PasswordValidators.isPasswordValide],
      newPassword: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    },{
      validator:PasswordValidators.passwordShouldMatch
    }
    )
   }

  ngOnInit(): void {
  }

}
