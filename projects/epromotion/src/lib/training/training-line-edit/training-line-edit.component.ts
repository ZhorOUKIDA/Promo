import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITraining } from 'epromotion/lib/domain';

@Component({
  selector: 'fps-training-line-edit',
  templateUrl: './training-line-edit.component.html',
  styleUrls: ['./training-line-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingLineEditComponent implements OnInit {
  @Input() public line?: ITraining;

  @Output() public cancel = new EventEmitter();
  @Output() public save = new EventEmitter<ITraining>();

  public lineForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.line = {
      publicId: null,
      startDate: null,
      endDate: null,
      organization: null,
      subject: null
    };
  }

  public ngOnInit(): void {
    const training = this.line;
    this.lineForm = this.formBuilder.group({
      organization: [this.line.organization, Validators.required],
      subject: [this.line.subject, Validators.required]
    });
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public onSave(): void {
    const formValues = this.lineForm.value;
    const dateRangeValues = this.lineForm.controls.dateRange.value;

    const trainingLine = {
      ...this.line,
      startDate: dateRangeValues.startDate,
      endDate: dateRangeValues.endDate,
      organization: formValues.organization,
      subject: formValues.subject
    } as ITraining;
    this.save.emit(trainingLine);
  }
}
