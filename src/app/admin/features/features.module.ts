import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { DoctorModule } from './doctor/doctor.module';
import { DepartmentModule } from './department/department.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSplitModule } from 'angular-split';



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    DoctorModule,
    AngularSplitModule,
    DepartmentModule
  ]
})
export class FeaturesModule { }
