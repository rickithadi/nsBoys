import { TestBed, inject } from '@angular/core/testing';

import { BootyService } from './booty.service';

describe('BootyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootyService]
    });
  });

  it('should be created', inject([BootyService], (service: BootyService) => {
    expect(service).toBeTruthy();
  }));
});
