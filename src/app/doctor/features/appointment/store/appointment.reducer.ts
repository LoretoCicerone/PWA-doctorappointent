import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as AppointmentActions from './appointment.actions';
import { IAppointment } from 'src/app/shared/model/IAppointment';
export const appointmentFeatureKey = 'Appointment';
export const adapterAppointment: EntityAdapter<IAppointment> = createEntityAdapter<IAppointment>();
export const initialAppointmentState: IAppointmentState = adapterAppointment.getInitialState({ showForm: false, isLoadingTable: false, isLoadingForm: false, isEditMode: false, selectedRowId: null });

export interface IAppointmentState extends EntityState<IAppointment> {
  showForm: boolean;
  isEditMode: boolean;
  isLoadingTable: boolean;
  isLoadingForm: boolean;
  selectedRowId: string;
}

const AppointmentReducer = createReducer(
  initialAppointmentState,
  on(AppointmentActions.loadAppointments, (state, action) => {
    return { ...state, isLoadingTable: true };
  }),

  on(AppointmentActions.loadAppointmentsSuccess, (state, action) => {
    let newState = adapterAppointment.removeAll(state);
    return adapterAppointment.upsertMany(action.appointments, { ...state, newState, isLoadingTable: false });
  }),
  
  on(AppointmentActions.loadAppointmentsFailure, (state, action) => {
    return { ...state, isLoadingTable: false }
  }),

  on(AppointmentActions.setCurrentObject, (state, action) => {
    return { ...state, selectedRowId: action.appointment.id, showForm:true, isEditMode: true}
  }),
  // on(CalendarActions.editSelectedRow, (state, action) => {
  //   return { ...state, selectedRowId: action.rowId, showForm: true, isEditMode: true, formDisabled: true };
  // }),
  on(AppointmentActions.newRow, (state, action) => {
    return { ...state, showForm: true, isEditMode: false };
  }),
  // on(CalendarActions.closeForm, (state, action) => {
  //   return { ...state, showForm: false, formDisabled: false };
  // }),

);

export function reducer(state: IAppointmentState | undefined, action: Action) {
  return AppointmentReducer(state, action);
}

export const AppointmentDefaultSelectors: {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapterAppointment.getSelectors();
