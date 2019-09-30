import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLineViewComponent } from './training-line-view.component';

describe('TrainingLineViewComponent', () => {
  let component: TrainingLineViewComponent;
  let fixture: ComponentFixture<TrainingLineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
