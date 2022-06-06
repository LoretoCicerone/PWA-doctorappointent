import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPatient from './patient.reducer';
import { PatientDefaultSelectors } from './patient.reducer';


export const selectPatientStateFeatureSelector = createFeatureSelector<fromPatient.IPatientState>(
    fromPatient.patientFeatureKey
);

// select the array of Entitys
export const selectAll = createSelector(
    selectPatientStateFeatureSelector,
    PatientDefaultSelectors.selectAll
);

export const selectedRowId = createSelector(selectPatientStateFeatureSelector, (state) =>
    state.selectedRowId);

export const selectAllEntities = createSelector(
    selectPatientStateFeatureSelector,
    PatientDefaultSelectors.selectEntities
);

export const selectCurrentRowObject = createSelector(
    selectedRowId,
    selectAllEntities,
    (rowId, entities) => entities[rowId]);

export const isLoadingTable = createSelector(selectPatientStateFeatureSelector, (state) =>
    state.isLoadingTable);

export const showForm = createSelector(selectPatientStateFeatureSelector, (state) =>
    state.showForm);


export const isEditMode = createSelector(selectPatientStateFeatureSelector, (state) =>
    state.isEditMode);

export const isLoadingForm = createSelector(selectPatientStateFeatureSelector, (state) =>
    state.isLoadingTable);