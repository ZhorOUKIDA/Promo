import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ITraining } from 'epromotion';

@Component({
  selector: 'fps-training-line-view',
  templateUrl: './training-line-view.component.html',
  styleUrls: ['./training-line-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingLineViewComponent {
  @Input() public readonly line: ITraining;

  @Output() public readonly edit = new EventEmitter<ITraining>();
  @Output() public readonly archive = new EventEmitter<ITraining>();

  public onEdit() {
    this.edit.emit(this.line);
  }

  public onArchive() {
    this.archive.emit(this.line);
  }
}
