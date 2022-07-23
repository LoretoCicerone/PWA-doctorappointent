import { TestBed } from '@angular/core/testing';

import { PrescriptionFacadeService } from './prescription-facade.service';

describe('PrescriptionFacadeService', () => {
  let service: PrescriptionFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
