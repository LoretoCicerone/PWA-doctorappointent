import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'prescription',
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
