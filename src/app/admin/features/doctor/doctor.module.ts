import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import * as fromDoctors from './store/doctor.reducer';
import { DoctorComponent } from './container/doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DoctorEffects } from './store/doctor.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
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
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    TranslateModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    StoreModule.forFeature(fromDoctors.doctorFeatureKey, fromDoctors.reducer),
    EffectsModule.forFeature([DoctorEffects])

  ]
})
export class DoctorModule { }
