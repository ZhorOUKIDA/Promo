import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VacancyListContainerComponent } from './vacancy-list-container.component';

describe('VacancyListContainerComponent', () => {
  let component: VacancyListContainerComponent;
  let fixture: ComponentFixture<VacancyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyListContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
