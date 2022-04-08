import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PHONE_NUMBER_PATTERN } from 'src/utils/helpers';
import { AccountService } from '../../services/account.service';
import { catchError, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Account } from '../../models/account.interface';
import { throwError } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})

export class RegisterFormComponent {
  emailMessage?: string = '';
  isSubmitted:boolean = false;
  message?: string;

  constructor(
    private fb: FormBuilder, 
    private accountService: AccountService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
  ) {}
  
  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    PhoneContact: [
      '',
      [Validators.required, Validators.pattern(PHONE_NUMBER_PATTERN)]
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    terms: [false, [Validators.requiredTrue]],
    agreements: [false, [Validators.required]],
  }); 

  ngOnInit(): void {
    this.clearIfEmailExits();
  }

  clearIfEmailExits() {
    this.registerForm.get('email')?.valueChanges.subscribe(() => {
      this.emailMessage='';
    })
  }
  onsubmit(){
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    this.authService.signUp({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    })
    .pipe(
      switchMap((user) => {
        const account: Account = { id: user.uid, status: 'pending' };
        const data = this.registerForm.value;
        delete data.password;
        Object.assign(account, data);
        return this.accountService.create(account)!;
      }),
      catchError((error) => {
        this.emailMessage = error.message;
        return throwError(error);
      })
    ).subscribe({
      next: () => {
        this.isSubmitted = false;
        this.registerForm.reset();
        this.snackbar.open(
          'Data stored successfully', 
          'Dismiss',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2500,
          }
        );
      },
      error: () => {
        this.snackbar.open(
          'Unable to store data', 
          'Dismiss',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2500,
          }
        );
      }
    })
  }
}


