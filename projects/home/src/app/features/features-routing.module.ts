import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes : Routes = [
  {
    path:'',component: FeaturesComponent,
    children:[]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class FeaturesRoutingModule { }
