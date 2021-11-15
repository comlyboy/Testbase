import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: 'register',
  //   loadChildren: () => import('./pages/auth/signup/signup.module')
  //     .then(m => m.SignupModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/auth/login/login.module')
      .then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
