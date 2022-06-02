import { createAction, props } from '@ngrx/store';
import { IPrescription } from '../model/IPrescription';

export const loadPrescriptions = createAction(
  '[Prescription] Load Prescription'
);

export const loadPrescriptionsSuccess = createAction(
  '[Prescription] Load Prescription Success',
  props<{ prescriptions: IPrescription[] }>()
);

export const loadPrescriptionsFailure = createAction(
  '[Prescription] Load Prescription Failure'
);

export const setCurrentObject = createAction(
  '[Prescription] Set Current Object',
  props<{prescription : IPrescription}>()
)

