import { createAction, props } from '@ngrx/store';

export const appointmentAppointments = createAction(
  '[Appointment] Appointment Appointments'
);

export const appointmentAppointmentsSuccess = createAction(
  '[Appointment] Appointment Appointments Success',
  props<{ data: any }>()
);

export const appointmentAppointmentsFailure = createAction(
  '[Appointment] Appointment Appointments Failure',
  props<{ error: any }>()
);
