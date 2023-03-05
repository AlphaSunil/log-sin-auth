import { TestBed } from '@angular/core/testing';

import { LogSinServiceService } from './log-sin-service.service';

describe('LogSinServiceService', () => {
  let service: LogSinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogSinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
