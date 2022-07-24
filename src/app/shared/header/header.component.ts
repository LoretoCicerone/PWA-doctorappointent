import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() setCurrentanguage = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  languageChange(event: any) {
    this.setCurrentanguage.emit(event.value);
  }

}
