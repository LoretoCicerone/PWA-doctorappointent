import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
