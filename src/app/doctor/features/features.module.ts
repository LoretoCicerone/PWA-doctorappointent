import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { DoctorModule } from 'src/app/admin/features/doctor/doctor.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from 'shared';
import { AppointmentModule } from 'src/app/admin/features/appointment/appointment.module';



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    DoctorModule,
    SharedModule,
    AppointmentModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
