import { TestBed, inject } from '@angular/core/testing';

import { CapoeiraMusicService } from './capoeira-music.service';

describe('CapoeiraMusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapoeiraMusicService]
    });
  });

  it('should be created', inject([CapoeiraMusicService], (service: CapoeiraMusicService) => {
    expect(service).toBeTruthy();
  }));
});
