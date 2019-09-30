import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITraining } from 'epromotion/lib/domain';
import { TrainingService } from '../training.service';

@Component({
  selector: 'fps-training-container',
  templateUrl: './training-container.component.html',
  styleUrls: ['./training-container.component.scss']
})
export class TrainingContainerComponent implements OnInit {
  public trainingLines: ITraining[];
  public isAddMode = false;
  public editedLine: ITraining = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: TrainingService
  ) {
    /**/
  }

  public ngOnInit() {
    this.service.getAll().subscribe(data => (this.trainingLines = data));
  }

  public onAdd() {
    this.isAddMode = true;
    this.editedLine = null;
  }

  public onEdit(trainingLine: ITraining) {
    this.isAddMode = false;
    this.editedLine = trainingLine;
  }

  public onCancel() {
    this.isAddMode = false;
    this.editedLine = null;
  }

  public onCreate(trainingLine: ITraining) {
    this.service.create(trainingLine).subscribe(line => {
      this.trainingLines = this.trainingLines.concat([line]);
      this.onCancel();
    });
  }

  public onUpdate(trainingLine: ITraining) {
    this.service.update(trainingLine).subscribe(line => {
      const index = this.trainingLines.findIndex(
        c => c.publicId === trainingLine.publicId
      );
      this.trainingLines[index] = line;
      this.onCancel();
    });
  }

  public onArchive(trainingLine: ITraining) {
    this.service.archive(trainingLine).subscribe(isSuccess => {
      if (isSuccess) {
        this.trainingLines = this.trainingLines.filter(
          c => c.publicId === trainingLine.publicId
        );
      }
    });
  }
}
