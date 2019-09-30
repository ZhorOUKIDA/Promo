import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ITraining } from 'epromotion/lib/domain';

@Component({
  selector: 'fps-training-lines',
  templateUrl: './training-lines.component.html',
  styleUrls: ['./training-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingLinesComponent {
  @Input() public readonly lines: ITraining[];
  @Input() public editedLine: ITraining;

  @Output() public readonly edit = new EventEmitter<ITraining>();
  @Output() public readonly archive = new EventEmitter<ITraining>();
  @Output() public readonly save = new EventEmitter<ITraining>();
  @Output() public readonly cancel = new EventEmitter();

  public onEdit(trainingLine: ITraining): void {
    this.edit.emit(trainingLine);
  }

  public onArchive(trainingLine: ITraining): void {
    this.archive.emit(trainingLine);
  }

  public onSave(trainingLine: ITraining): void {
    this.save.emit(trainingLine);
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public isLineEdited(line: ITraining) {
    return this.editedLine && line.publicId === this.editedLine.publicId;
  }
}
