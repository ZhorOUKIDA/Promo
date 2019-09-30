import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICareerLine } from 'epromotion/lib/domain';

@Component({
  selector: 'fps-career-line-edit',
  templateUrl: './career-line-edit.component.html',
  styleUrls: ['./career-line-edit.component.scss']
})
export class CareerLineEditComponent implements OnInit {
  @Input() public line?: ICareerLine;

  @Output() public cancel = new EventEmitter();
  @Output() public save = new EventEmitter<ICareerLine>();

  public lineForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.line = {
      publicId: null,
      careerTypeId: null,
      gradeName: null,
      postName: null,
      startDate: null,
      endDate: null,
      serviceCode: null,
      serviceName: null,
      statutoryFunctionId: null,
      statutoryFunctionName: null
    };
  }

  public ngOnInit(): void {
    const career = this.line;
    this.lineForm = this.formBuilder.group({
      service: [career.serviceCode, Validators.required],
      function: [career.statutoryFunctionId, Validators.required]
      // dateRange: this.formBuilder.group(
      //   [this.formBuilder.control(career.startDate, Validators.required)]
      // )
      // dateRange: new FormGroup(
      //   { startDate: new FormControl(career.startDate, Validators.required) },
      //   { endDate: new FormControl(career.endDate), },
      // ),
    });
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public onSave(): void {
    const formValues = this.lineForm.value;
    const dateRangeValues = this.lineForm.controls.dateRange.value;

    const careerLine = {
      ...this.line,
      serviceCode: formValues.service,
      function: formValues.function,
      startDate: dateRangeValues.startDate,
      endDate: dateRangeValues.endDate
    } as ICareerLine;
    this.save.emit(careerLine);
  }
}
