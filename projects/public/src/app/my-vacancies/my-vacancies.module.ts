import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MotivationModule } from 'epromotion';
import { TrainingModule } from 'epromotion/lib/training/training.module';
import { SharedModule } from '../shared/shared.module';
import { MyVacanciesRoutingModule } from './my-vacancies-routing.module';
import { VacancyDetailContainerComponent } from './vacancy-detail/vacancy-detail-container.component';
import { VacancyDetailResolverService } from './vacancy-detail/vacancy-detail-resolver.service';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { VacancyListContainerComponent } from './vacancy-list/vacancy-list-container.component';
import { VacancyListResolverService } from './vacancy-list/vacancy-list-resolver.service';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { MyVacanciesSidenavComponent } from './my-vacancies-sidenav/my-vacancies-sidenav.component';

@NgModule({
  declarations: [
    VacancyListContainerComponent,
    VacancyListComponent,
    VacancyDetailComponent,
    VacancyDetailContainerComponent,
    MyVacanciesSidenavComponent
  ],
  imports: [
    CommonModule,
    MotivationModule,
    MyVacanciesRoutingModule,
    SharedModule,
    TrainingModule
  ],
  providers: [VacancyDetailResolverService, VacancyListResolverService]
})
export class MyVacanciesModule {
  /**/
}
