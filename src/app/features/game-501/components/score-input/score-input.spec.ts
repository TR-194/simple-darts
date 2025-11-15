import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreInput } from './score-input';

describe('ScoreInput', () => {
  let component: ScoreInput;
  let fixture: ComponentFixture<ScoreInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreInput]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
