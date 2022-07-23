import { createAction, props } from '@ngrx/store';

export const loadAppointments = createAction(
  '[Appointment] Load Appointments'
);

export const loadAppointmentsSuccess = createAction(
  '[Appointment] Load Appointments Success',
  props<{ data: any }>()
);

export const loadAppointmentsFailure = createAction(
  '[Appointment] Load Appointments Failure',
  props<{ error: any }>()
);
