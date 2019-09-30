import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICareerLine } from 'epromotion';
import { CareerService } from '../career.service';

@Component({
  selector: 'fps-career-container',
  templateUrl: './career-container.component.html',
  styleUrls: ['./career-container.component.scss']
})
export class CareerContainerComponent implements OnInit {
  public careerLines: ICareerLine[];
  public isAddMode = false;
  public editedLine: ICareerLine = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: CareerService
  ) {
    /**/
  }

  public ngOnInit() {
    this.route.data.forEach(data => {
      if (data) {
        this.careerLines = this.route.snapshot.data.careerLines;
      }
    });
  }

  public onAdd() {
    this.isAddMode = true;
    this.editedLine = null;
  }

  public onEdit(careerLine: ICareerLine) {
    this.isAddMode = false;
    this.editedLine = careerLine;
  }

  public onCancel() {
    this.isAddMode = false;
    this.editedLine = null;
  }

  public onCreate(careerLine: ICareerLine) {
    this.service.create(careerLine).subscribe(line => {
      this.careerLines = this.careerLines.concat([line]);
      this.onCancel();
    });
  }

  public onUpdate(careerLine: ICareerLine) {
    this.service.update(careerLine).subscribe(line => {
      const index = this.careerLines.findIndex(
        c => c.publicId === careerLine.publicId
      );
      this.careerLines[index] = line;
      this.onCancel();
    });
  }

  public onArchive(careerLine: ICareerLine) {
    this.service.archive(careerLine).subscribe(isSuccess => {
      if (isSuccess) {
        this.careerLines = this.careerLines.filter(
          c => c.publicId !== careerLine.publicId
        );
      }
    });
  }
}
