import { Component, Input, OnInit } from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-shared-form-actions',
  templateUrl: './shared-form-actions.component.html',
  styleUrls: ['./shared-form-actions.component.scss']
})
export class SharedFormActionsComponent implements OnInit {

  @Input() isFormInvalid;
  displayStyle = "none";
  constructor() { }

  ngOnInit(): void {
  }

  closeForm(event){
    this.displayStyle = "block";
  }

}
