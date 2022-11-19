import { TestBed } from '@angular/core/testing';

import { BookMarkService } from './bookmark.service';

describe('BookMarkService', () => {
  let service: BookMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
