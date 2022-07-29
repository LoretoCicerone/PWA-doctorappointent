import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  links = ['appointments', 'prescription', 'profile'];
 // activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }


}
