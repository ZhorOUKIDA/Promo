import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { TrainingLineEditComponent } from './training-line-edit/training-line-edit.component';
import { TrainingLineViewComponent } from './training-line-view/training-line-view.component';
import { TrainingLinesComponent } from './training-lines/training-lines.component';

@NgModule({
  declarations: [
    TrainingContainerComponent,
    TrainingLineEditComponent,
    TrainingLineViewComponent,
    TrainingLinesComponent
  ],
  imports: [SharedModule],
  exports: [TrainingContainerComponent]
})
export class TrainingModule {
  /**/
}
