import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DoctorFacadeService } from '../doctor-facade.service';
import { IDoctor } from '../model/IDoctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
 
  doctors$ = this.doctorFacade.doctors$;
  isLoadingTable$ = this.doctorFacade.isLoadingTable$;
  showForm$ = this.doctorFacade.showForm$;
  currentRowObject = this.doctorFacade.currentRowObject$;
  
  columns: { name: string, dataKey: string, position?: 'right' | 'left', display: string, isSortable: boolean }[];

  constructor(private doctorFacade : DoctorFacadeService) { }

  ngOnInit(): void {
    this.doctorFacade.loadDoctors();
    this.columns = [
      { dataKey: 'name', name: 'Nome', display: 'table-cell', isSortable: true },
      { dataKey: 'email', name: 'Email', display: 'table-cell', isSortable: true },
      { dataKey: 'phone_number', name: 'Numero di telefono', display: 'table-cell', isSortable: true },
      { dataKey: 'address', name: 'Indirizzo', display: 'table-cell', isSortable: true },
      { dataKey: 'department', name: 'Dipartimento', display: 'table-cell', isSortable: true },
      { dataKey: 'education', name: 'Titolo di studio', display: 'table-cell', isSortable: true },
    ]
  }

  setCurrentObject(doctor: IDoctor) {
    this.doctorFacade.setCurrentObject(doctor);
  }

}
