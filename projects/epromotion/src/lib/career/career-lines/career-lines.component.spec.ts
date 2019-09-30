import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLinesComponent } from './career-lines.component';

describe('CareerLinesComponent', () => {
  let component: CareerLinesComponent;
  let fixture: ComponentFixture<CareerLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
