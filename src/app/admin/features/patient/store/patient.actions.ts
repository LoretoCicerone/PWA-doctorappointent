import { createAction, props } from '@ngrx/store';

export const patientPatients = createAction(
  '[Patient] Patient Patients'
);

export const patientPatientsSuccess = createAction(
  '[Patient] Patient Patients Success',
  props<{ data: any }>()
);

export const patientPatientsFailure = createAction(
  '[Patient] Patient Patients Failure',
  props<{ error: any }>()
);
