import { TestBed, inject } from '@angular/core/testing';

import { TokenhandlerService } from './tokenhandler.service';

describe('TokenhandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenhandlerService]
    });
  });

  it('should be created', inject([TokenhandlerService], (service: TokenhandlerService) => {
    expect(service).toBeTruthy();
  }));
});
