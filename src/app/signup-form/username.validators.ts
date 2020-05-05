import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PromiseType } from 'protractor/built/plugins';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

export class UserNameValidators{

  static isSpaceAllowed(control: AbstractControl) : ValidationErrors | null{
    if((control.value as string).indexOf(' ') >= 0)
      return {
        isSpace: true
      }
      return null
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> | null {
     return new Promise((resolve,reject) =>{
       setTimeout(
         () =>{
           if(control.value == "mosh")
            return resolve({isUnique: true})
          else{
            return resolve(null)
          }
         },2000
       )
     })
  }
}
