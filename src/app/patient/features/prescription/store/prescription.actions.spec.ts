import * as fromPrescription from './prescription.actions';

describe('loadPrescriptions', () => {
  it('should return an action', () => {
    expect(fromPrescription.loadPrescriptions().type).toBe('[Prescription] Load Prescriptions');
  });
});
