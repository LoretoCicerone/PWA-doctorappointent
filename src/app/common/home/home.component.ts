import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img_path = "/assets/img/online-medicine-concept_160901-152.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
