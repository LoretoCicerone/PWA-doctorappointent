import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './container/doctor.component';
import { SharedModule } from 'shared';



@NgModule({
  declarations: [
    DoctorFormComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
