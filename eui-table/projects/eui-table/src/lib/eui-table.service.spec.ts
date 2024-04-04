import { TestBed } from '@angular/core/testing';

import { EuiTableService } from './eui-table.service';

describe('EuiTableService', () => {
  let service: EuiTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuiTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
