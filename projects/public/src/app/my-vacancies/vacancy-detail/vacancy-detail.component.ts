import { Component, Input } from '@angular/core';
import { IVacancyDetail } from 'epromotion';

@Component({
  selector: 'fps-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.scss']
})
export class VacancyDetailComponent {
  @Input() public readonly vacancy: IVacancyDetail;

  constructor() {
    /* */
  }
}
