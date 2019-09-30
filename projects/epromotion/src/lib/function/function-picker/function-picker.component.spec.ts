import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionPickerComponent } from './function-picker.component';

describe('FunctionPickerComponent', () => {
  let component: FunctionPickerComponent;
  let fixture: ComponentFixture<FunctionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
