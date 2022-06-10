import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppointment from './appointment.reducer';
import { AppointmentDefaultSelectors } from './appointment.reducer';


export const selectAppointmentStateFeatureSelector = createFeatureSelector<fromAppointment.IAppointmentState>(
  fromAppointment.appointmentFeatureKey
);

// select the array of Entities
export const selectAll = createSelector(
  selectAppointmentStateFeatureSelector,
  AppointmentDefaultSelectors.selectAll
);

export const selectedRowId = createSelector(selectAppointmentStateFeatureSelector, (state) =>
  state.selectedRowId);

export const selectAllEntities = createSelector(
  selectAppointmentStateFeatureSelector,
  AppointmentDefaultSelectors.selectEntities
);

export const selectCurrentRowObject = createSelector(
  selectedRowId,
  selectAllEntities,
  (rowId, entities) => entities[rowId]);

export const isLoadingTable = createSelector(selectAppointmentStateFeatureSelector, (state) =>
  state.isLoadingTable);

export const showForm = createSelector(selectAppointmentStateFeatureSelector, (state) =>
  state.showForm);


export const isEditMode = createSelector(selectAppointmentStateFeatureSelector, (state) =>
  state.isEditMode);

export const isLoadingForm = createSelector(selectAppointmentStateFeatureSelector, (state) =>
  state.isLoadingTable);