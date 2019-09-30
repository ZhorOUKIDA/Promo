import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLineEditComponent } from './career-line-edit.component';

describe('CareerLineEditComponent', () => {
  let component: CareerLineEditComponent;
  let fixture: ComponentFixture<CareerLineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerLineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
