import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Seite } from './Seite';

describe('Seite', () => {
  let component: Seite;
  let fixture: ComponentFixture<Seite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seite]
    }).compileComponents();

    fixture = TestBed.createComponent(Seite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
