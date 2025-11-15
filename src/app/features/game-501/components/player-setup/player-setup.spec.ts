import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerSetup } from './player-setup';

describe('PlayerSetup', () => {
  let component: PlayerSetup;
  let fixture: ComponentFixture<PlayerSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSetup]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
