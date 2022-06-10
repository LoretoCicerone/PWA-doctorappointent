import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAppointment } from 'src/app/shared/model/IAppointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService {

  getAllAppointments(): Observable<IAppointment[]> {
    let appointments: IAppointment[] = [
      {
        id: '1',
        appointmentDate: new Date(2022, 6, 10),
        appointmentTime: '02:00 pm',
        patient: {
          name: 'Tizio',
          email: 'email'
        },
        doctorBooked: null
      },
      {
        id: '2',
        appointmentDate: new Date(2022, 6, 8),
        appointmentTime: '02:00 pm',
        patient: {
          name: 'Tizio',
          email: 'email'
        },
        doctorBooked: null
      },
      {
        id: '3',
        appointmentDate: new Date(2022, 6, 9),
        appointmentTime: '02:00 pm',
        patient: {
          name: 'Tizio',
          email: 'email'
        },
        doctorBooked: null
      },
    ]
    return of(appointments);
  }
  constructor() { }
}
