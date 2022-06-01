import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IDepartment } from '../model/IDepartment';
import * as DepartmentActions from './department.actions';
export const departmentFeatureKey = 'Department';
export const adapterDepartment: EntityAdapter<IDepartment> = createEntityAdapter<IDepartment>();
export const initialDepartmentState: IDepartmentState = adapterDepartment.getInitialState({ showForm: false, isLoadingTable: false, isLoadingForm: false, isEditMode: false, selectedRowId: null });

export interface IDepartmentState extends EntityState<IDepartment> {
  showForm: boolean;
  isEditMode: boolean;
  isLoadingTable: boolean;
  isLoadingForm: boolean;
  selectedRowId: string;
}

const DepartmentReducer = createReducer(
  initialDepartmentState,
  on(DepartmentActions.loadDepartments, (state, action) => {
    return { ...state, isLoadingTable: true };
  }),

  on(DepartmentActions.loadDepartmentsSuccess, (state, action) => {
    let newState = adapterDepartment.removeAll(state);
    return adapterDepartment.upsertMany(action.departments, { ...state, newState, isLoadingTable: false });
  }),
  
  on(DepartmentActions.loadDepartmentsFailure, (state, action) => {
    return { ...state, isLoadingTable: false }
  }),

  on(DepartmentActions.setCurrentObject, (state, action) => {
    return { ...state, selectedRowId: action.department.id, showForm:true, isEditMode: true}
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

export function reducer(state: IDepartmentState | undefined, action: Action) {
  return DepartmentReducer(state, action);
}

export const DepartmentDefaultSelectors: {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapterDepartment.getSelectors();
