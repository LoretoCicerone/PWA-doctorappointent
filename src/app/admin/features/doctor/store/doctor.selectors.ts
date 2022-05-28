import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDoctor from './doctor.reducer';
import { DoctorDefaultSelectors } from './doctor.reducer';


export const selectDocorStateFeatureSelector = createFeatureSelector<fromDoctor.IDoctorState>(
  fromDoctor.doctorFeatureKey
);

// select the array of Entitys
export const selectAll = createSelector(
  selectDocorStateFeatureSelector,
  DoctorDefaultSelectors.selectAll
);

export const selectedRowId = createSelector(selectDocorStateFeatureSelector, (state) =>
  state.selectedRowId);

export const selectAllEntities = createSelector(
  selectDocorStateFeatureSelector,
  DoctorDefaultSelectors.selectEntities
);

export const selectCurrentRowObject = createSelector(
  selectedRowId,
  selectAllEntities,
  (rowId, entities) => entities[rowId]);

export const isLoadingTable = createSelector(selectDocorStateFeatureSelector, (state) =>
  state.isLoadingTable);

export const showForm = createSelector(selectDocorStateFeatureSelector, (state) =>
  state.showForm);


export const isEditMode = createSelector(selectDocorStateFeatureSelector, (state) =>
  state.isEditMode);

export const isLoadingForm = createSelector(selectDocorStateFeatureSelector, (state) =>
  state.isLoadingTable);