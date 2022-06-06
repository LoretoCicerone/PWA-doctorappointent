import { createAction, props } from '@ngrx/store';
import { IPatient } from '../model/IPatient';

export const loadPatients = createAction(
  '[Patient] Load Patients'
);

export const loadPatientsSuccess = createAction(
  '[Patient] Load Patients Success',
  props<{ patients: IPatient[] }>()
);

export const loadPatientsFailure = createAction(
  '[Patient] Load Patients Failure'
);

export const setCurrentObject = createAction(
  '[Patient] Set Current Object',
  props<{patient : IPatient}>()
)
