import { TestBed, inject } from '@angular/core/testing';

import { BllService } from './bll.service';

describe('BllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BllService]
    });
  });

  it('should be created', inject([BllService], (service: BllService) => {
    expect(service).toBeTruthy();
  }));
});
