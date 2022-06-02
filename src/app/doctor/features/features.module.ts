import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { DoctorModule } from 'src/app/admin/features/doctor/doctor.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from 'shared';



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    DoctorModule,
    SharedModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
