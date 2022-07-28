import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './container/appointment.component';
import { AngularSplitModule } from 'angular-split';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EffectsModule } from '@ngrx/effects';
import { AppointmentEffects } from './store/appointment.effect';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as fromAppointment from './store/appointment.reducer';
import { StoreModule } from '@ngrx/store';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentFormComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    MatCardModule,
    FormsModule,
    AppointmentRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatIconModule,
    NgbTimepickerModule,
    MatNativeDateModule, 
    MatSortModule,
    MatPaginatorModule,
    TranslateModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(fromAppointment.appointmentFeatureKey, fromAppointment.reducer),
    EffectsModule.forFeature([AppointmentEffects])
  ]
})
export class AppointmentModule { }
