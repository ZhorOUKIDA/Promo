import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IVacancyDetail, VacancyService } from 'epromotion';
import { Observable } from 'rxjs';

@Injectable()
export class VacancyDetailResolverService implements Resolve<IVacancyDetail> {
  constructor(private readonly service: VacancyService) {
    /**/
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<IVacancyDetail> {
    const id = route.paramMap.get('id');
    return this.service.get(id);
  }
}
