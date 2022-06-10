import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppointment from './store/appointment.reducer';
import {
  loadAppointments,
  newRow,
  setCurrentObject
} from './store/appointment.actions';

import{
  selectAll,
  isLoadingTable,
  selectCurrentRowObject,
  showForm,
  isEditMode
}from './store/appointment.selectors';
import { IAppointment } from 'src/app/shared/model/IAppointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentFacadeService {

  currentRowObject$ = this.store.select(selectCurrentRowObject);
  showForm$ = this.store.select(showForm);
  isEditMode = this.store.select(isEditMode);
  isLoadingTable$ = this.store.select(isLoadingTable);
  appointments$ = this.store.select(selectAll);

  constructor(private store: Store<fromAppointment.IAppointmentState>) { }

  public loadAppointments(){
    this.store.dispatch(loadAppointments());
  }

  public setCurrentObject(appointmentRowSelected : IAppointment){
    this.store.dispatch(setCurrentObject({appointment:appointmentRowSelected}));
  }

  buildNewRow(){
   this.store.dispatch(newRow());
  }
}
