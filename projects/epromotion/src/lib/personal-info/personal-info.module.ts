import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PersonalInfoContainerComponent } from './personal-info-container/personal-info-container.component';
import { EmployeeFieldComponent } from './personal-info-details/employee-field.component';
import { PersonalInfoDetailsComponent } from './personal-info-details/personal-info-details.component';

@NgModule({
  declarations: [
    EmployeeFieldComponent,
    PersonalInfoContainerComponent,
    PersonalInfoDetailsComponent
  ],
  imports: [SharedModule],
  exports: [PersonalInfoContainerComponent]
})
export class PersonalInfoModule {}
