import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { DoctorModule } from './doctor/doctor.module';
import { SharedModule } from '../shared/shared.module';
import { DepartmentModule } from './department/department.module';



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    DoctorModule,
    DepartmentModule
  ]
})
export class FeaturesModule { }
