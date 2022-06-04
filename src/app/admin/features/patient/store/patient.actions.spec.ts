import * as fromPatient from './patient.actions';

describe('patientPatients', () => {
  it('should return an action', () => {
    expect(fromPatient.patientPatients().type).toBe('[Patient] Patient Patients');
  });
});
