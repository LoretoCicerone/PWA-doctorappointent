import { Component, OnInit } from '@angular/core';
import { IPatient } from '../model/IPatient';
import { PatientFacadeService } from '../patient-facade.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patients$ = this.patientFacade.departments$;
  isLoadingTable$ = this.patientFacade.isLoadingTable$;
  showForm$ = this.patientFacade.showForm$;
  currentRowObject = this.patientFacade.currentRowObject$;
  columns: { name: string, dataKey: string, position?: 'right' | 'left', display: string, isSortable: boolean }[];

  constructor(private patientFacade: PatientFacadeService) { }

  ngOnInit(): void {
    this.patientFacade.loadPatients();
    this.columns = [
      {
        dataKey: 'name', name: 'patient.name', display: 'table-cell', isSortable: true,
      },
      {
        dataKey: 'email', name: 'Email', display: 'table-cell', isSortable: true,
      },
      {
        dataKey: 'gender', name: 'patient.gender', display: 'table-cell', isSortable: true,
      },
      {
        dataKey: 'phone_number', name: 'patient.phoneNumber', display: 'table-cell', isSortable: true,
      },

    ]
  }

  setCurrentObject(patient: IPatient) {
    this.patientFacade.setCurrentObject(patient);
  }

}
