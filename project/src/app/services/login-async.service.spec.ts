import { TestBed } from '@angular/core/testing';

import { LoginAsyncService } from './login-async.service';

describe('LoginAsyncService', () => {
  let service: LoginAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
