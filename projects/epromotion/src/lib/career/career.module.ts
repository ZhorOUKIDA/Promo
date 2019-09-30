import { NgModule } from '@angular/core';
import { DepartmentModule } from '../department/department.module';
import { FunctionModule } from '../function/function.module';
import { SharedModule } from '../shared/shared.module';
import { CareerContainerComponent } from './career-container/career-container.component';
import { CareerLineEditComponent } from './career-line-edit/career-line-edit.component';
import { CareerLineViewComponent } from './career-line-view/career-line-view.component';
import { CareerLinesComponent } from './career-lines/career-lines.component';
import { CareerService } from './career.service';

@NgModule({
  declarations: [
    CareerContainerComponent,
    CareerLinesComponent,
    CareerLineViewComponent,
    CareerLineEditComponent,
  ],
  imports: [DepartmentModule, FunctionModule, SharedModule],
  providers: [CareerService],
})
export class CareerModule {}
