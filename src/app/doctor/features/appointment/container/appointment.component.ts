import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/shared/model/IAppointment';
import { AppointmentFacadeService } from '../appointment-facade.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointments$ = this.appointmentFacade.appointments$;
  isLoadingTable$ = this.appointmentFacade.isLoadingTable$;
  showForm$ = this.appointmentFacade.showForm$;
  currentRowObject = this.appointmentFacade.currentRowObject$;

  columns: { name: string, dataKey: string, position?: 'right' | 'left', display: string, isSortable: boolean }[];
  constructor(private appointmentFacade: AppointmentFacadeService) { }

  ngOnInit(): void {
    this.appointmentFacade.loadAppointments();
    this.columns = [
      { dataKey: 'appointmentDate', name: 'doctor.date', display: 'table-cell', isSortable: true },
      { dataKey: 'appointmentTime', name: 'doctor.hour', display: 'table-cell', isSortable: true },
      { dataKey: 'patient', name: 'doctor.patient', display: 'table-cell', isSortable: true }
    ]
    
  }

  addNewRow() {
    this.appointmentFacade.buildNewRow();
  }

  setCurrentObject(appointment: IAppointment) {
    this.appointmentFacade.setCurrentObject(appointment);
  }

}
