import { NgModule } from '@angular/core';
import { PromotionsComponent } from '.';
import { DepartmentModule } from '../department/department.module';
import { FunctionModule } from '../function/function.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PromotionsComponent],
  imports: [DepartmentModule, FunctionModule, SharedModule],
  exports: [PromotionsComponent],
})
export class EmployeeModule {
  /**/
}
