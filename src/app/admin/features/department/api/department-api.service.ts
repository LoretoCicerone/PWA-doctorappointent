import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDepartment } from '../model/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {
  getAllDepartments() : Observable<IDepartment[]>{
    const departments : IDepartment[] = [
      {
      id:"1",
      department:'Dipartimento'
    },
    {
      id:"2",
      department:'Dipartimento 3 '
    },
    {
      id:"3",
      department:'DISIM'
    },
  ]
  return of(departments);
  }

  constructor() { }
}
