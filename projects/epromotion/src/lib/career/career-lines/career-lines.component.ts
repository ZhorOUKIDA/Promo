import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ICareerLine } from 'epromotion/lib/domain';

@Component({
  selector: 'fps-career-lines',
  templateUrl: './career-lines.component.html',
  styleUrls: ['./career-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerLinesComponent {
  @Input() public readonly lines: ICareerLine[];
  @Input() public editedLine: ICareerLine;

  @Output() public readonly edit = new EventEmitter<ICareerLine>();
  @Output() public readonly archive = new EventEmitter<ICareerLine>();
  @Output() public readonly save = new EventEmitter<ICareerLine>();
  @Output() public readonly cancel = new EventEmitter();

  public onEdit(careerLine: ICareerLine): void {
    this.edit.emit(careerLine);
  }

  public onArchive(careerLine: ICareerLine): void {
    this.archive.emit(careerLine);
  }

  public onSave(careerLine: ICareerLine): void {
    this.save.emit(careerLine);
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public isLineEdited(line: ICareerLine) {
    return this.editedLine && line.publicId === this.editedLine.publicId;
  }
}
