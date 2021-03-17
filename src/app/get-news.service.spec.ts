import { TestBed } from '@angular/core/testing';

import { GetNewsService } from './get-news.service';

describe('GetNewsService', () => {
  let service: GetNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
