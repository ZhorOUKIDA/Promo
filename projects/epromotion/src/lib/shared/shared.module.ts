import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '../i18n/i18n.module';
import { LayoutModule } from '../layout/layout.module';
import { DateRangeComponent } from './date-range/date-range.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, I18nModule, LayoutModule],
  exports: [
    CommonModule,
    DateRangeComponent,
    ReactiveFormsModule,
    I18nModule,
    LayoutModule
  ],
  declarations: [DateRangeComponent]
})
export class SharedModule {
  /**/
}
