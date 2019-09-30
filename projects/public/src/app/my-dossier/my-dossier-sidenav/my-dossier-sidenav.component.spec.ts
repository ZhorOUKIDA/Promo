import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDossierSidenavComponent } from './my-dossier-sidenav.component';

describe('MyDossierSidenavComponent', () => {
  let component: MyDossierSidenavComponent;
  let fixture: ComponentFixture<MyDossierSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDossierSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDossierSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
