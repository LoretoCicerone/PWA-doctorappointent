import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';

const routes: Routes = [{
  path: '', component: PatientComponent
}]


@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    RouterModule.forChild(routes),
    
  ]
})
export class PatientModule { }
