import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from 'epromotion';

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, LayoutModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    ReactiveFormsModule,

    LayoutModule
  ]
})
export class SharedModule {
  /**/
}
