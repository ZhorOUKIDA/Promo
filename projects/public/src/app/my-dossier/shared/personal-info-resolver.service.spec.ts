import { TestBed } from '@angular/core/testing';

import { PersonalInfoResolverService } from './personal-info-resolver.service';

describe('PersonalInfoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalInfoResolverService = TestBed.get(PersonalInfoResolverService);
    expect(service).toBeTruthy();
  });
});
