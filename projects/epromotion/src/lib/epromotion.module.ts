import { NgModule } from '@angular/core';
import { CareerModule } from './career/career.module';
import { EmployeeModule } from './employee/employee.module';
import { FunctionModule } from './function/function.module';
import { MotivationModule } from './motivation/motivation.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { PromotionModule } from './promotion/promotion.module';
import { SharedModule } from './shared/shared.module';
import { TrainingModule } from './training/training.module';
import { VacancyModule } from './vacancy/vacancy.module';

@NgModule({
  declarations: [],
  imports: [
    CareerModule,
    EmployeeModule,
    PersonalInfoModule,
    PromotionModule,
    SharedModule,
    FunctionModule,
    MotivationModule,
    TrainingModule,
    VacancyModule
  ],
  exports: [EmployeeModule, MotivationModule, TrainingModule]
})
export class EpromotionModule {
  /**/
}
