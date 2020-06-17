import { TestBed } from '@angular/core/testing';

import { HttpInterceptorBasicAuthService } from './interceptor-auth.service';

describe('InterceptorAuthService', () => {
  let service: HttpInterceptorBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
