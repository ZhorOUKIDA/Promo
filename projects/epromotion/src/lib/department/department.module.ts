import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DepartmentPickerComponent } from './department-picker/department-picker.component';
import { DepartmentService } from './department.service';

@NgModule({
  declarations: [DepartmentPickerComponent],
  imports: [SharedModule],
  providers: [DepartmentService],
  exports: [DepartmentPickerComponent],
})
export class DepartmentModule {
  /**/
}
