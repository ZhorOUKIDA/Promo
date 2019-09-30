import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IVacancyList, VacancyService } from 'epromotion';
import { Observable } from 'rxjs';

@Injectable()
export class VacancyListResolverService implements Resolve<IVacancyList[]> {
  constructor(private readonly vacancyService: VacancyService) {
    /**/
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<IVacancyList[]> {
    return this.vacancyService.getAll();
  }
}
