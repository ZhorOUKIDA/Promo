import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVacanciesSidenavComponent } from './my-vacancies-sidenav.component';

describe('MyVacanciesSidenavComponent', () => {
  let component: MyVacanciesSidenavComponent;
  let fixture: ComponentFixture<MyVacanciesSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVacanciesSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVacanciesSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
