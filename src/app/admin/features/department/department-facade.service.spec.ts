import { TestBed } from '@angular/core/testing';

import { DepartmentFacadeService } from './department-facade.service';

describe('DepartmentFacadeService', () => {
  let service: DepartmentFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
