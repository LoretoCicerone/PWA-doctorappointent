import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'login',
  loadChildren: ()=> import('../../auth/login/login.module').then(m=>m.LoginModule)
},
{
  path:'register',
  loadChildren: ()=> import('../../auth/register/register.module').then(m=>m.RegisterModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
