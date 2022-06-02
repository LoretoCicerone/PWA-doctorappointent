import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './container/prescription.component';
import { PrescriptionFormComponent } from './components/prescription-form/prescription-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { PrescriptionEffects } from './store/prescription.effects';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromPrescriptions from './store/prescription.reducer';
import { SharedModule } from 'shared';
import { PrescriptionListComponent } from './components/prescription-list/prescription-list.component';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    PrescriptionComponent,
    PrescriptionFormComponent,
    PrescriptionListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSplitModule,
    SharedModule,
    PrescriptionRoutingModule,
    StoreModule.forFeature(fromPrescriptions.prescriptionFeatureKey, fromPrescriptions.reducer),
    EffectsModule.forFeature([PrescriptionEffects])
  ]
})
export class PrescriptionModule { }
