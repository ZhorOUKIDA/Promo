import { Routes } from '@angular/router';
import { MyVacanciesSidenavComponent } from './my-vacancies-sidenav/my-vacancies-sidenav.component';
import { VacancyDetailContainerComponent } from './vacancy-detail/vacancy-detail-container.component';
import { VacancyDetailResolverService } from './vacancy-detail/vacancy-detail-resolver.service';
import { VacancyListContainerComponent } from './vacancy-list/vacancy-list-container.component';
import { VacancyListResolverService } from './vacancy-list/vacancy-list-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: VacancyListContainerComponent,
    resolve: { vacancies: VacancyListResolverService }
  },
  {
    path: '',
    component: MyVacanciesSidenavComponent,
    outlet: 'sidenav'
  },
  {
    path: ':id',
    component: VacancyDetailContainerComponent,
    resolve: { vacancy: VacancyDetailResolverService }
  }
];
