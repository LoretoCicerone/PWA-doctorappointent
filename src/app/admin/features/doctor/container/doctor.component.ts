import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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

  constructor(private doctorFacade: DoctorFacadeService) { }

  ngOnInit(): void {
    this.doctorFacade.loadDoctors();
    this.columns = [
      { dataKey: 'name', name: 'admin.doctorName', display: 'table-cell', isSortable: true },
      { dataKey: 'email', name: 'Email', display: 'table-cell', isSortable: true },
      { dataKey: 'phone_number', name: 'admin.doctorNumber', display: 'table-cell', isSortable: true },
      { dataKey: 'address', name: 'admin.doctorAddress', display: 'table-cell', isSortable: true },
      { dataKey: 'department', name: 'admin.doctorDepartment', display: 'table-cell', isSortable: true },
      { dataKey: 'education', name: 'admin.doctorEducation', display: 'table-cell', isSortable: true },
    ]
    this.currentRowObject = this.doctorFacade.currentRowObject$.pipe(map((doctor) => doctor ? doctor : this.addNewRow()));
  }

  addNewRow(): IDoctor {
    const newDoctor: IDoctor = {
      id: null,
      address: '',
      department: '',
      education: '',
      email: '',
      name: '',
      phone_number: '',
    }
    this.doctorFacade.buildNewRow();
    return newDoctor;
  }

  setCurrentObject(doctor: IDoctor) {
    console.log(doctor);
    this.doctorFacade.setCurrentObject(doctor);
  }

}
