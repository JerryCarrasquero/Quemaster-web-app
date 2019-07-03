import { TestBed, inject } from '@angular/core/testing';

import { ComputilService } from './computil.service';

describe('ComputilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputilService]
    });
  });

  it('should be created', inject([ComputilService], (service: ComputilService) => {
    expect(service).toBeTruthy();
  }));
});
