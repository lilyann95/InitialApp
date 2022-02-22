import { TestBed } from '@angular/core/testing';

import { ConfirmpasswordService } from './confirmpassword.service';

describe('ConfirmpasswordService', () => {
  let service: ConfirmpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
