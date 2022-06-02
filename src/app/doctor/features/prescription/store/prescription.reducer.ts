import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IPrescription } from '../model/IPrescription';
import * as PrescriptionActions from './prescription.actions';
export const prescriptionFeatureKey = 'Prescription';
export const adapterPrescription: EntityAdapter<IPrescription> = createEntityAdapter<IPrescription>();
export const initialPrescriptionState: IPrescriptionState = adapterPrescription.getInitialState({ showForm: false, isLoadingTable: false, isLoadingForm: false, isEditMode: false, selectedRowId: null });

export interface IPrescriptionState extends EntityState<IPrescription> {
  showForm: boolean;
  isEditMode: boolean;
  isLoadingTable: boolean;
  isLoadingForm: boolean;
  selectedRowId: string;
}

const PrescriptionReducer = createReducer(
  initialPrescriptionState,
  on(PrescriptionActions.loadPrescriptions, (state, action) => {
    return { ...state, isLoadingTable: true };
  }),

  on(PrescriptionActions.loadPrescriptionsSuccess, (state, action) => {
    let newState = adapterPrescription.removeAll(state);
    return adapterPrescription.upsertMany(action.prescriptions, { ...state, newState, isLoadingTable: false });
  }),
  
  on(PrescriptionActions.loadPrescriptionsFailure, (state, action) => {
    return { ...state, isLoadingTable: false }
  }),

  on(PrescriptionActions.setCurrentObject, (state, action) => {
    return { ...state, selectedRowId: action.prescription.id, showForm:true, isEditMode: true}
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

export function reducer(state: IPrescriptionState | undefined, action: Action) {
  return PrescriptionReducer(state, action);
}

export const PrescriptionDefaultSelectors: {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapterPrescription.getSelectors();
