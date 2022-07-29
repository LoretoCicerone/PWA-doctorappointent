import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentTableComponent } from './components/appointment-table/appointment-table.component';
import { AppointmentComponent } from './container/appointment.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'shared';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AppointmentComponent, AppointmentTableComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    TranslateModule,
    SharedModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
