import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IPatient } from '../model/IPatient';
import * as PatientActions from './patient.actions';
export const patientFeatureKey = 'Patient';
export const adapterPatient: EntityAdapter<IPatient> = createEntityAdapter<IPatient>();
export const initialPatientState: IPatientState = adapterPatient.getInitialState({ showForm: false, isLoadingTable: false, isLoadingForm: false, isEditMode: false, selectedRowId: null });

export interface IPatientState extends EntityState<IPatient> {
  showForm: boolean;
  isEditMode: boolean;
  isLoadingTable: boolean;
  isLoadingForm: boolean;
  selectedRowId: string;
}

const PatientReducer = createReducer(
  initialPatientState,
  on(PatientActions.loadPatients, (state, action) => {
    return { ...state, isLoadingTable: true };
  }),

  on(PatientActions.loadPatientsSuccess, (state, action) => {
    let newState = adapterPatient.removeAll(state);
    return adapterPatient.upsertMany(action.patients, { ...state, newState, isLoadingTable: false });
  }),
  
  on(PatientActions.loadPatientsFailure, (state, action) => {
    return { ...state, isLoadingTable: false }
  }),

  on(PatientActions.setCurrentObject, (state, action) => {
    return { ...state, selectedRowId: action.patient.id, showForm:true, isEditMode: true}
  }),
  // on(CalendarActions.editSelectedRow, (state, action) => {
  //   return { ...state, selectedRowId: action.rowId, showForm: true, isEditMode: true, formDisabled: true };
  // }),
  // on(CalendarActions.newRow, (state, action) => {
  //   return { ...state, selectedRowId: 'new', showForm: true, isEditMode: false };
  // }),
  // on(CalendarActions.closeForm, (state, action) => {
  //   return { ...state, showForm: false, formDisabled: false };
  // }),

);

export function reducer(state: IPatientState | undefined, action: Action) {
  return PatientReducer(state, action);
}

export const PatientDefaultSelectors: {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapterPatient.getSelectors();
