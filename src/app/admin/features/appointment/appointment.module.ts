import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './container/appointment.component';
import { AppointmentFilterComponent } from './components/appointment-filter/appointment-filter.component';
import { AppointmentRoutingModule } from './appointment-routing.module';



@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentFilterComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
