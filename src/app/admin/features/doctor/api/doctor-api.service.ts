import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDoctor } from '../model/IDoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {
  getAllDoctors() : Observable<IDoctor[]>{
    const doctors : IDoctor[] = [
      {
      id:"1",
      address : 'Via Umberto 1',
      department: 'Dipartimento scienze',
      education : 'Educazione',
      email : 'loretocicerone1@gmail.com',
      name : 'Loreto Cicerone',
      phone_number: '3468653'
    },
    {
      id:"2",
      address : 'Via Umberto 1',
      department: 'Dipartimento scienze',
      education : 'Educazione',
      email : 'MarioRossi@gmail.com',
      name : 'Mario Rossi',
      phone_number: '3468653'
    },
    {
      id:"3",
      address : 'Via Umberto 1',
      department: 'Dipartimento scienze',
      education : 'Educazione',
      email : 'MarioRossi@gmail.com',
      name : 'Bruno COnti',
      phone_number: '3468653'
    },
  ]
  return of(doctors);
  }

  constructor() { }
}
