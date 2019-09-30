import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFunction } from '../domain';

import { data } from './function.data';

@Injectable()
export class FunctionService {
  public getAll(): Observable<IFunction[]> {
    return of(data);
  }
}
