import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{
  path: '', component: PatientComponent
}]


@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatCardModule,
    
    PatientRoutingModule,
    RouterModule.forChild(routes),
    
  ]
})
export class PatientModule { }
