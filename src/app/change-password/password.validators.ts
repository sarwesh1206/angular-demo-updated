import { ValidationErrors, AbstractControl } from '@angular/forms';
import { resolve } from 'dns';

export class PasswordValidators{
  static isPasswordValide(control: AbstractControl) {

    return new Promise(resolve =>{
      if (control.value != "1234"){
        resolve({isValidOldPassword: true})
      }
      else
       resolve(null)
    })

  }

  static passwordShouldMatch(control: AbstractControl){
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value){
      return {isPasswordMatch: true};
    }
    return null;
  }
}
