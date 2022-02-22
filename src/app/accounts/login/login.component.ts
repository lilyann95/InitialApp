import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  timestring: string = '';
  datestring: string = '';

  constructor (
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.timestring = moment().format("hh:mm:ss A");
    this.datestring = moment().format('d mmmm y');
  }

  loginFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.maxLength(10), Validators.minLength(8)],
    ],
  });

  ngOnInit(): void {
    setInterval(() => {
      this.timestring = moment().format("hh:mm:ss A");
      this.datestring = moment().format('Do MMMM y');
    }, 1000);
  }
  get email() {
    return this.loginFormGroup.get('email');
  }
  get password() {
    return this.loginFormGroup.get('password');
  }

  submitform(e: any) {
    if (!this.loginFormGroup.valid) return;
    const { email, password } = this.loginFormGroup.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['accounts/check']);
        this.snackBar.open(
          'Logged in successfully',
          'Dismiss',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2500
          }
        )
      },
      error: () => {
        console.log("error occurred");
        this.router.navigate(['accounts/login']);
        this.snackBar.open(
          'Something wrong has happened',
          'Dismiss',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2500
          }
        )
      }
    })
  }
}
