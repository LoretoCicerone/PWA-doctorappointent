import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrescription from './prescription.reducer';
import { PrescriptionDefaultSelectors } from './prescription.reducer';


export const selectPrescriptionStateFeatureSelector = createFeatureSelector<fromPrescription.IPrescriptionState>(
    fromPrescription.prescriptionFeatureKey
);

// select the array of Entitys
export const selectAll = createSelector(
    selectPrescriptionStateFeatureSelector,
    PrescriptionDefaultSelectors.selectAll
);

export const selectedRowId = createSelector(selectPrescriptionStateFeatureSelector, (state) =>
    state.selectedRowId);

export const selectAllEntities = createSelector(
    selectPrescriptionStateFeatureSelector,
    PrescriptionDefaultSelectors.selectEntities
);

export const selectCurrentRowObject = createSelector(
    selectedRowId,
    selectAllEntities,
    (rowId, entities) => entities[rowId]);

export const isLoadingTable = createSelector(selectPrescriptionStateFeatureSelector, (state) =>
    state.isLoadingTable);

export const showForm = createSelector(selectPrescriptionStateFeatureSelector, (state) =>
    state.showForm);


export const isEditMode = createSelector(selectPrescriptionStateFeatureSelector, (state) =>
    state.isEditMode);

export const isLoadingForm = createSelector(selectPrescriptionStateFeatureSelector, (state) =>
    state.isLoadingTable);