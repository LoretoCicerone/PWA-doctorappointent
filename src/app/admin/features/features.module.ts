import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { DoctorModule } from './doctor/doctor.module';
import { DepartmentModule } from './department/department.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { PatientModule } from './patient/patient.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({ 
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    TranslateModule,
    DepartmentModule,
    DoctorModule,
    PatientModule
  ]
})
export class FeaturesModule { }
