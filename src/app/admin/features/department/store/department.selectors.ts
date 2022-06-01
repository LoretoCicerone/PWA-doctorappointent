import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDepartment from './department.reducer';
import { DepartmentDefaultSelectors } from './department.reducer';


export const selectDepartmentStateFeatureSelector = createFeatureSelector<fromDepartment.IDepartmentState>(
    fromDepartment.departmentFeatureKey
);

// select the array of Entitys
export const selectAll = createSelector(
    selectDepartmentStateFeatureSelector,
    DepartmentDefaultSelectors.selectAll
);

export const selectedRowId = createSelector(selectDepartmentStateFeatureSelector, (state) =>
    state.selectedRowId);

export const selectAllEntities = createSelector(
    selectDepartmentStateFeatureSelector,
    DepartmentDefaultSelectors.selectEntities
);

export const selectCurrentRowObject = createSelector(
    selectedRowId,
    selectAllEntities,
    (rowId, entities) => entities[rowId]);

export const isLoadingTable = createSelector(selectDepartmentStateFeatureSelector, (state) =>
    state.isLoadingTable);

export const showForm = createSelector(selectDepartmentStateFeatureSelector, (state) =>
    state.showForm);


export const isEditMode = createSelector(selectDepartmentStateFeatureSelector, (state) =>
    state.isEditMode);

export const isLoadingForm = createSelector(selectDepartmentStateFeatureSelector, (state) =>
    state.isLoadingTable);