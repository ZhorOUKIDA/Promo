import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Injectable } from '@angular/core';
import { ICareerLine } from 'epromotion';
import { Observable } from 'rxjs';
import { CareerService } from '../../../../../epromotion/src/lib/career/career.service';

@Injectable()
export class CareerLinesResolverService implements Resolve<ICareerLine[]> {
  constructor(private readonly careerService: CareerService) {
    /**/
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<ICareerLine[]> {
    return this.careerService.getAll();
  }
}
