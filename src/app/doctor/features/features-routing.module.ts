import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      {
        path: 'prescriptions',
        loadChildren: () => import('./prescription/prescription.module').then(m => m.PrescriptionModule)
      },
      {
        path: 'appointments',
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule)
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
