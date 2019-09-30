import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainingLinesComponent } from './training-lines.component';

describe('TrainingLineComponent', () => {
  let component: TrainingLinesComponent;
  let fixture: ComponentFixture<TrainingLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingLinesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
