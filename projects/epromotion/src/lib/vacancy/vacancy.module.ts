import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VacancyService } from './vacancy.service';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [VacancyService]
})
export class VacancyModule {}
