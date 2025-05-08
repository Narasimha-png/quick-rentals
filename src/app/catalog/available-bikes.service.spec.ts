import { TestBed } from '@angular/core/testing';

import { AvailableBikesService } from './available-bikes.service';

describe('AvailableBikesService', () => {
  let service: AvailableBikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableBikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
