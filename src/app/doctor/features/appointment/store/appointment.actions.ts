import { createAction, props } from '@ngrx/store';
import { IAppointment } from 'src/app/shared/model/IAppointment';

export const loadAppointments = createAction(
  '[Appointment] Load Appointments'
);

export const loadAppointmentsSuccess = createAction(
  '[Appointment] Load Appointments Success',
  props<{ appointments: IAppointment[] }>()
);

export const loadAppointmentsFailure = createAction(
  '[Appointment] Load Appointments Failure'
);

export const setCurrentObject = createAction(
  '[Appointment] Set Current Object',
  props<{appointment : IAppointment}>()
)

export const newRow = createAction(
  '[Appointment] New Row'
)

