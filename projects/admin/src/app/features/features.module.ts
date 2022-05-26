import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { DoctorModule } from './doctor/doctor.module';
import { DepartmentModule } from './department/department.module';
import { AppointmentModule } from './appointment/appointment.module';



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    DoctorModule,
    DepartmentModule,
    AppointmentModule
  ]
})
export class FeaturesModule { }
