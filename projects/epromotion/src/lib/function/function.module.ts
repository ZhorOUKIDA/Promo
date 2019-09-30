import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FunctionPickerComponent } from './function-picker/function-picker.component';
import { FunctionService } from './function.service';

@NgModule({
  declarations: [FunctionPickerComponent],
  exports: [FunctionPickerComponent],
  imports: [SharedModule],
  providers: [FunctionService],
})
export class FunctionModule {}
