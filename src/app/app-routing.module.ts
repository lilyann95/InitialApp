import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
