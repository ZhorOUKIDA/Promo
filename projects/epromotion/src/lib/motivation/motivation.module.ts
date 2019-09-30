import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MotivationComponent } from './motivation.component';

@NgModule({
  declarations: [MotivationComponent],
  imports: [SharedModule],
  exports: [MotivationComponent]
})
export class MotivationModule {
  /**/
}
