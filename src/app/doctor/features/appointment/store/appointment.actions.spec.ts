import * as fromAppointment from './appointment.actions';

describe('appointmentAppointments', () => {
  it('should return an action', () => {
    expect(fromAppointment.appointmentAppointments().type).toBe('[Appointment] Appointment Appointments');
  });
});
