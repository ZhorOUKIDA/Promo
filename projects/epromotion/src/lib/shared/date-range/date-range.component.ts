import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { IDateRange } from 'epromotion/lib/domain';
import { dateRangeValidator } from './date-range.validator';

@Component({
  selector: 'fps-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  // @Input() public formGroup: FormGroup;
  @Input() public dateRange: IDateRange;
  @Input() public dateRangeForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    /**/
  }

  public ngOnInit(): void {
    const dateRangeControl = this.formBuilder.group({
      startDate: [this.dateRange.startDate, Validators.required],
      endDate: [this.dateRange.endDate, dateRangeValidator]
    });
    this.dateRangeForm.addControl('dateRange', dateRangeControl);
  }

  public getFormControl(name: string): AbstractControl {
    const dateRangeControl = this.dateRangeForm.controls.dateRange as FormGroup;
    return dateRangeControl.controls[name];
  }
}
