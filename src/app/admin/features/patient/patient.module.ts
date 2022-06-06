import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './container/patient.component';
import { AngularSplitModule } from 'angular-split';
import { SharedModule } from 'src/app/shared/shared.module';
import * as fromPatients from './store/patient.reducer';
import { PatientEffects } from './store/patient.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PatientRoutingModule } from './patient-routing.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    SharedModule,
    MatCardModule,
    PatientRoutingModule,
    StoreModule.forFeature(fromPatients.patientFeatureKey, fromPatients.reducer),
    EffectsModule.forFeature([PatientEffects])
  ]
})
export class PatientModule { }
