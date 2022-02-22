import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { CreateAccountComponent } from './create/create-account.component';
import { LoginComponent } from './login/login.component';
import { CheckDetailsComponent } from './login/checkdetails/checkdetails.component';

const routes: Routes = [
  {
    path: 'register',
    component: CreateAccountComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: 'check',
    component: CheckDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }