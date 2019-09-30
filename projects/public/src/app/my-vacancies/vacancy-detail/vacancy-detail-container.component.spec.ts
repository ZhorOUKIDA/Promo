import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetailContainerComponent } from './vacancy-detail-container.component';

describe('VacancyDetailContainerComponent', () => {
  let component: VacancyDetailContainerComponent;
  let fixture: ComponentFixture<VacancyDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
