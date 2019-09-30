import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPickerComponent } from './department-picker.component';

describe('DepartmentPickerComponent', () => {
  let component: DepartmentPickerComponent;
  let fixture: ComponentFixture<DepartmentPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
