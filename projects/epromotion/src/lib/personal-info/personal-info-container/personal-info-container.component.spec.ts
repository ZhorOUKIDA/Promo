import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoContainerComponent } from './personal-info-container.component';

describe('PersonalInfoContainerComponent', () => {
  let component: PersonalInfoContainerComponent;
  let fixture: ComponentFixture<PersonalInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
