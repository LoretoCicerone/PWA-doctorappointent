import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './container/patient.component';
import { AngularSplitModule } from 'angular-split';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    SharedModule
  ]
})
export class PatientModule { }
