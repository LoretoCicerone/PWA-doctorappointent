import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPrescriptions from './store/prescription.reducer';
import {
  loadPrescriptions,
  setCurrentObject
} from './store/prescription.actions';

import{
  selectAll,
  isLoadingTable,
  selectCurrentRowObject,
  showForm,
  isEditMode
}from './store/prescription.selectors';
import { IPrescription } from './model/IPrescription';
@Injectable({
  providedIn: 'root'
})
export class PrescriptionFacadeService {

  currentRowObject$ = this.store.select(selectCurrentRowObject);
  showForm$ = this.store.select(showForm);
  isEditMode = this.store.select(isEditMode);
  isLoadingTable$ = this.store.select(isLoadingTable);
  prescriptions$ = this.store.select(selectAll);

  constructor(private store: Store<fromPrescriptions.IPrescriptionState>) { }

  public loadPrescriptions(){
    this.store.dispatch(loadPrescriptions());
  }

  public setCurrentObject(prescriptionRowSelected : IPrescription){
    this.store.dispatch(setCurrentObject({prescription:prescriptionRowSelected}));
  }
}
