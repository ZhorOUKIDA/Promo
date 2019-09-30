import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICareerLine } from 'epromotion/lib/domain';

@Component({
  selector: 'fps-career-line-view',
  templateUrl: './career-line-view.component.html',
  styleUrls: ['./career-line-view.component.scss']
})
export class CareerLineViewComponent {
  @Input() public readonly line: ICareerLine;

  @Output() public readonly edit = new EventEmitter<ICareerLine>();
  @Output() public readonly archive = new EventEmitter<ICareerLine>();

  public onEdit() {
    this.edit.emit(this.line);
  }

  public onArchive() {
    this.archive.emit(this.line);
  }
}
