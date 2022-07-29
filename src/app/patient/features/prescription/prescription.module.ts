import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionTableComponent } from './components/prescription-table/prescription-table.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'shared';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionsComponent } from './container/prescriptions.component';



@NgModule({
  declarations: [
    PrescriptionsComponent, PrescriptionTableComponent, 
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    TranslateModule,
    PrescriptionRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class PrescriptionModule { }
