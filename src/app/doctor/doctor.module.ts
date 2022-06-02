import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: DoctorComponent
}]

@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorModule { }
