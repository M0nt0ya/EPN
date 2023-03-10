import { TestBed } from '@angular/core/testing';

import { listHttpServiceService } from './list-http-service.service';

describe('ListHttpServiceService', () => {
  let service: listHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(listHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
