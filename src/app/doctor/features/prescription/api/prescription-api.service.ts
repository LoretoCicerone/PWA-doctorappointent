import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPrescription } from '../model/IPrescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionApiService {
  getAllPrescriptions() : Observable<IPrescription[]>{
    const departments : IPrescription[] = [
      {
      id:"1",
      feedback:'feed',
      medicicePrescripted:'medicine',
      pathology:'path',
      patient:{
        name:'tizio',
        email:'tizio@email'
      },
      procedure:'proced',
      symptoms: 'dcdcd'
    },
    {
      id:"2",
      feedback:'feed',
      medicicePrescripted:'medicine',
      pathology:'path',
      patient:{
        name:'tizio',
        email:'tizio@email'
      },
      procedure:'proced',
      symptoms: 'dcdcd'
    },
    {
      id:"3",
      feedback:'feed',
      medicicePrescripted:'medicine',
      pathology:'path',
      patient:{
        name:'tizio',
        email:'tizio@email'
      },
      procedure:'proced',
      symptoms: 'dcdcd'
    },
  ]
  return of(departments);
  }
  constructor() { }
}
