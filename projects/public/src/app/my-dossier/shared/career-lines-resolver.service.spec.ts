import { TestBed } from '@angular/core/testing';

import { CareerLinesResolverService } from './career-lines-resolver.service';

describe('CareerLinesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareerLinesResolverService = TestBed.get(CareerLinesResolverService);
    expect(service).toBeTruthy();
  });
});
