import { TestBed } from '@angular/core/testing';

import { VacancyDetailResolverService } from './vacancy-detail-resolver.service';

describe('VacancyDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacancyDetailResolverService = TestBed.get(VacancyDetailResolverService);
    expect(service).toBeTruthy();
  });
});
