import { createAction, props } from '@ngrx/store';
import { IDoctor } from '../model/IDoctor';

export const loadDoctors = createAction(
  '[Doctor] Load Doctors'
);

export const loadDoctorsSuccess = createAction(
  '[Doctor] Load Doctors Success',
  props<{ doctors: IDoctor[] }>()
);

export const loadDoctorsFailure = createAction(
  '[Doctor] Load Doctors Failure'
);

export const setCurrentObject = createAction(
  '[Doctor] Set Current Object',
  props<{doctor : IDoctor}>()
)
