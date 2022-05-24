import { TestBed } from '@angular/core/testing';

import { AppointmentFacadeService } from './appointment-facade.service';

describe('AppointmentFacadeService', () => {
  let service: AppointmentFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
