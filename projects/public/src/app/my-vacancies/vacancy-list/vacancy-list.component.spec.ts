import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VacancyListComponent } from './vacancy-list.component';

describe('VacanciesListComponent', () => {
  let component: VacancyListComponent;
  let fixture: ComponentFixture<VacancyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
