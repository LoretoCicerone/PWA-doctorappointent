import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../model/IProfile.model';

@Component({
  selector: 'app-userprofile-card',
  templateUrl: './userprofile-card.component.html',
  styleUrls: ['./userprofile-card.component.scss']
})
export class UserprofileCardComponent implements OnInit {

  @Input() user : IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
