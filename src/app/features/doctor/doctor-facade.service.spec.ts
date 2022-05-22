import { TestBed } from '@angular/core/testing';

import { DoctorFacadeService } from './doctor-facade.service';

describe('DoctorFacadeService', () => {
  let service: DoctorFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
