import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IEmployee } from 'epromotion';

@Injectable()
export class PersonalInfoService {
  private _employee: IEmployee = {
    firstName: 'Elton',
    lastName: 'John',
    birthdate: new Date(1980, 0, 15),
    languageRoleCode: 'RU',
    engagementDateForeignAffairs: new Date(1995, 1, 4),
    engagementDateState: new Date(1999, 1, 4),
    officialEmail: 'elton@john.be',
    privateEmail: 'eltonjohn@yahoo.de',
    officialPhoneNumber: '555-132456789',
    officialMobileNumber: '555-132456789',
    remark: 'No comment.',
    nationalNumber: 'x001-001 001',
    address: 'Rue des petites Carmes, 1000 Bruxelles',
  };

  public get(): Observable<IEmployee> {
    return of({
      firstName: 'Elton',
      lastName: 'John',
      birthdate: new Date(1980, 0, 15),
      languageRoleCode: 'RU',
      engagementDateForeignAffairs: new Date(1995, 1, 4),
      engagementDateState: new Date(1999, 1, 4),
      officialEmail: 'elton@john.be',
      privateEmail: 'eltonjohn@yahoo.de',
      officialPhoneNumber: '555-132456789',
      officialMobileNumber: '555-132456789',
      remark: 'No comment.',
      nationalNumber: 'x001-001 001',
      address: 'Rue des petites Carmes, 1000 Bruxelles',
    });
  }
}
