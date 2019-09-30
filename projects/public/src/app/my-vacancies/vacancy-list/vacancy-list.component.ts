import { Component, Input } from '@angular/core';
import { IVacancyList } from 'epromotion/lib/domain/vacancy-list.model';

@Component({
  selector: 'fps-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent {
  @Input() public vacancies: IVacancyList[];

  public columns: string[] = ['service', 'function', 'description', 'publicId'];
}
