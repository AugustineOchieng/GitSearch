import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profiles.service';

describe('ProfilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});

