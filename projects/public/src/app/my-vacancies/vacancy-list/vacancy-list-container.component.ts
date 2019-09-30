import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancyList } from 'epromotion/lib/domain/vacancy-list.model';

@Component({
  templateUrl: './vacancy-list-container.component.html'
})
export class VacancyListContainerComponent implements OnInit {
  public vacancies: IVacancyList[];
  private filters: ((vacancy: IVacancyList) => boolean)[] = [];

  private static availableFilters(
    value: string
  ): (vacancy: IVacancyList) => boolean {
    return VacancyListContainerComponent[value];
  }

  private static hasApplied(vacancy: IVacancyList): boolean {
    return vacancy.hasApplied;
  }

  private static isClosed(vacancy: IVacancyList): boolean {
    return !!vacancy.closingDate;
  }

  private static isPublished(vacancy: IVacancyList): boolean {
    return !!vacancy.publishDate;
  }

  constructor(private readonly route: ActivatedRoute) {}

  public get filteredVacancies(): IVacancyList[] {
    let result = this.vacancies;
    this.filters.forEach(filter => (result = result.filter(filter)));
    return result;
  }

  public ngOnInit(): void {
    this.route.data.forEach(data => (this.vacancies = data.vacancies));
  }

  public onFilterChanged(event) {
    const filterValue = event.value;
    const filters = filterValue instanceof Array ? filterValue : [filterValue];

    this.filters = filters.map(f =>
      VacancyListContainerComponent.availableFilters(f)
    );
  }
}
