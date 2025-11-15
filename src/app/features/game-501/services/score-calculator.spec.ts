import { TestBed } from '@angular/core/testing';

import { ScoreCalculator } from './score-calculator';

describe('ScoreCalculator', () => {
  let service: ScoreCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCalculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
