import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'admin',
  loadChildren: ()=> import('../../admin/admin.module').then(m=>m.AdminModule)
},
{
  path:'doctor',
  loadChildren: ()=> import('../../doctor/doctors.module').then(m=>m.DoctorsModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
