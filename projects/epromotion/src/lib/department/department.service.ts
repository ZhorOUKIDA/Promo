import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IDepartment } from '../domain';
import { data } from './department.data';

@Injectable()
export class DepartmentService {
  public getAll(): Observable<IDepartment[]> {
    return of(data);
  }
}
