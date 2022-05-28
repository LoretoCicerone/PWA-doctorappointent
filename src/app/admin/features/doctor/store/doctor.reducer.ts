import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IDoctor } from '../model/IDoctor';
import * as DoctorActions from './doctor.actions';
export const doctorFeatureKey = 'Doctor';
export const adapterDoctor: EntityAdapter<IDoctor> = createEntityAdapter<IDoctor>();
export const initialDoctorState: IDoctorState = adapterDoctor.getInitialState({ showForm: false, isLoadingTable: false, isLoadingForm: false, isEditMode: false, selectedRowId: null });

export interface IDoctorState extends EntityState<IDoctor> {
  showForm: boolean;
  isEditMode: boolean;
  isLoadingTable: boolean;
  isLoadingForm: boolean;
  selectedRowId: string;
}

const DoctorReducer = createReducer(
  initialDoctorState,
  on(DoctorActions.loadDoctors, (state, action) => {
    return { ...state, isLoadingTable: true };
  }),

  on(DoctorActions.loadDoctorsSuccess, (state, action) => {
    let newState = adapterDoctor.removeAll(state);
    return adapterDoctor.upsertMany(action.doctors, { ...state, newState, isLoadingTable: false });
  }),
  
  on(DoctorActions.loadDoctorsFailure, (state, action) => {
    return { ...state, isLoadingTable: false }
  }),

  on(DoctorActions.setCurrentObject, (state, action) => {
    return { ...state, selectedRowId: action.doctor.id, showForm:true, isEditMode: true}
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

export function reducer(state: IDoctorState | undefined, action: Action) {
  return DoctorReducer(state, action);
}

export const DoctorDefaultSelectors: {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapterDoctor.getSelectors();
