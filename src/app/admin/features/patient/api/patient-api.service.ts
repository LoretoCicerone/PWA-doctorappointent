import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPatient } from '../model/IPatient';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  getAllPatients() : Observable<IPatient[]>{
    const departments : IPatient[] = [
      {
      id:"1",
      email: 'email',
      name:'name',
      date: new Date(),
      gender:'male',
      phone_number:'34567800',
      time: '14:30'
    },
    {
      id:"2",
      email: 'email',
      name:'nome 2',
      date: new Date(),
      gender:'male',
      phone_number:'34567800',
      time: '14:30'
    },
    {
      id:"3",
      email: 'email',
      name:'nome 4',
      date: new Date(),
      gender:'male',
      phone_number:'34567800',
      time: '14:30'
    },
  ]
  return of(departments);
  }

  constructor() { }
}
