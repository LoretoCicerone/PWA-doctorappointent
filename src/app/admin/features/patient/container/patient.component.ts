import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  isLoadingTable$;
  patients$;
  columns;
  constructor() { }

  ngOnInit(): void {
  }

}
