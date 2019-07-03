import { TestBed, inject } from '@angular/core/testing';

import { TaketurnService } from './taketurn.service';

describe('TaketurnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaketurnService]
    });
  });

  it('should be created', inject([TaketurnService], (service: TaketurnService) => {
    expect(service).toBeTruthy();
  }));
});
