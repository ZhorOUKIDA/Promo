import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLineViewComponent } from './career-line-view.component';

describe('CareerLineViewComponent', () => {
  let component: CareerLineViewComponent;
  let fixture: ComponentFixture<CareerLineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerLineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
