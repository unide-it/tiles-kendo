import { TestBed } from '@angular/core/testing';

import { TileService } from 'src/app/_services/tile.service';

describe('TileService', () => {
  let service: TileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
