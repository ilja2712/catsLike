import { TestBed } from '@angular/core/testing';

import { ApiCatsService } from './api-cats.service';

describe('ApiCatsService', () => {
  let service: ApiCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
