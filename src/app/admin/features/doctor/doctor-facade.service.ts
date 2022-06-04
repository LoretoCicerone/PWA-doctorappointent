import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromDoctors from './store/doctor.reducer';

import {
  loadDoctors,
  setCurrentObject,
  newRow
} from './store/doctor.actions';

import{
  selectAll,
  isLoadingTable,
  selectCurrentRowObject,
  showForm,
  isEditMode
}from './store/doctor.selectors';

import { IDoctor } from './model/IDoctor';

@Injectable({
  providedIn: 'root'
})

export class DoctorFacadeService {

  currentRowObject$ = this.store.select(selectCurrentRowObject);
  showForm$ = this.store.select(showForm);
  isEditMode = this.store.select(isEditMode);
  isLoadingTable$ = this.store.select(isLoadingTable);
  doctors$ = this.store.select(selectAll);

  constructor(private store: Store<fromDoctors.IDoctorState>) {
   }

   public loadDoctors(){
     this.store.dispatch(loadDoctors());
   }

   public setCurrentObject(doctorRowSelected : IDoctor){
     this.store.dispatch(setCurrentObject({doctor:doctorRowSelected}));
   }

   buildNewRow(){
    this.store.dispatch(newRow());
   }
}
