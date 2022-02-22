import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './create/register-form/register-form.component';
import { CreateAccountComponent } from './create/create-account.component';
import { InfoFormComponent } from './create/info-form/info-form.component';
import { AccountsComponent } from './accounts.component';
import { DataComponent } from '../accounts/data/data.component';
import { DailogComponent } from '../accounts/data/dailog/dailog.component';
import { EditDetailsComponent } from '../accounts/data/editDetails/editdetails.component';
import { CheckDetailsComponent } from '../accounts/login/checkdetails/checkdetails.component';

//Angular Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginComponent,
    CreateAccountComponent,
    InfoFormComponent,
    AccountsComponent,
    DataComponent,
    DailogComponent,
    EditDetailsComponent,
    CheckDetailsComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ]
})

export class AccountsModule { }
