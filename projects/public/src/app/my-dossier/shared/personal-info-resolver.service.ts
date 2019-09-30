import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployee } from 'epromotion';

import { PersonalInfoService } from '../personal-info.service';

@Injectable()
export class PersonalInfoResolverService implements Resolve<IEmployee> {
  constructor(private readonly personalInfo: PersonalInfoService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IEmployee> {
    return this.personalInfo.get(); // .pipe(map(data => data[0].take(1)));
  }
}
