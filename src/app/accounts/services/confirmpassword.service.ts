import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { Account } from '../models/account.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfirmpasswordService {

  constructor() { }

  static mustMatch(controlName: string, matchingControlName: string)
  {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch){
        return;
      }


      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    }
  }
}


