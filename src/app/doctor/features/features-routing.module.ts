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
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
