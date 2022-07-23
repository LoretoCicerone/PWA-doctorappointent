import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionModule } from './prescription/prescription.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ProfileModule } from './profile/profile.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
     MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    PrescriptionModule,
    FeaturesRoutingModule,
    AppointmentModule,
    ProfileModule
  ]
})
export class FeaturesModule { }
