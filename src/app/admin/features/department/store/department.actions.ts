import { createAction, props } from '@ngrx/store';
import { IDepartment } from '../model/IDepartment';

export const loadDepartments = createAction(
  '[Department] Load Departments'
);

export const loadDepartmentsSuccess = createAction(
  '[Department] Load Departments Success',
  props<{ departments: IDepartment[] }>()
);

export const loadDepartmentsFailure = createAction(
  '[Department] Load Departments Failure'
);

export const setCurrentObject = createAction(
  '[Department] Set Current Object',
  props<{department : IDepartment}>()
)
