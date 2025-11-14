import { TestBed } from '@angular/core/testing';

import { WpData } from './wp-data';

describe('WpData', () => {
  let service: WpData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
