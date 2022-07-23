import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileCardComponent } from './components/userprofile-card/userprofile-card.component';
import { ProfileComponent } from './container/profile.component';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effect';
import { MatCardModule } from '@angular/material/card';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [ProfileComponent, UserprofileCardComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProfileEffects]),
    MatCardModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
