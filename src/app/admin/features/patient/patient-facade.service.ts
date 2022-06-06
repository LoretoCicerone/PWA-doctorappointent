import { Injectable } from '@angular/core';
import { IPatient } from './model/IPatient';
import * as fromPatients from './store/patient.reducer';
import {
  loadPatients,
  setCurrentObject
} from './store/patient.actions';

import{
  selectAll,
  isLoadingTable,
  selectCurrentRowObject,
  showForm,
  isEditMode
}from './store/patient.selectors';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class PatientFacadeService {

  currentRowObject$ = this.store.select(selectCurrentRowObject);
  showForm$ = this.store.select(showForm);
  isEditMode = this.store.select(isEditMode);
  isLoadingTable$ = this.store.select(isLoadingTable);
  departments$ = this.store.select(selectAll);

  constructor(private store: Store<fromPatients.IPatientState>) { }

  public loadPatients(){
    this.store.dispatch(loadPatients());
  }

  public setCurrentObject(patient : IPatient){
    this.store.dispatch(setCurrentObject({patient:patient}));
  }
}
