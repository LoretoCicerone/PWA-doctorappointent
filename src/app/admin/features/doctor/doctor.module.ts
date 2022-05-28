import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import * as fromDoctors from './store/doctor.reducer';
import { DoctorComponent } from './container/doctor.component';
import { SharedModule } from 'src/app/shared/src/lib/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DoctorEffects } from './store/doctor.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [
    DoctorFormComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AngularSplitModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    StoreModule.forFeature(fromDoctors.doctorFeatureKey, fromDoctors.reducer),
    EffectsModule.forFeature([DoctorEffects])

  ]
})
export class DoctorModule { }
