import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLineEditComponent } from './training-line-edit.component';

describe('TrainingLineEditComponent', () => {
  let component: TrainingLineEditComponent;
  let fixture: ComponentFixture<TrainingLineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
