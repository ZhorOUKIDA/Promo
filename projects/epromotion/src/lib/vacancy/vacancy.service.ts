import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IVacancyDetail } from '../domain/vacancy-detail.model';
import { IVacancyList } from '../domain/vacancy-list.model';
import { data } from './vacancy.data';

@Injectable()
export class VacancyService {
  public getAll(): Observable<IVacancyList[]> {
    return of(data.map(this.mapToDetail));
  }
  private mapToDetail(vacancyDetail: IVacancyDetail): IVacancyList {
    return {
      publicId: vacancyDetail.publicId,
      service: vacancyDetail.service,
      function: vacancyDetail.function,
      status: vacancyDetail.status,
      description: vacancyDetail.shortDescription,
      canApply: vacancyDetail.canApply,
      hasApplied: vacancyDetail.hasApplied,
      insertDate: vacancyDetail.insertDate,
      publishDate: vacancyDetail.publishDate,
      processingDate: vacancyDetail.processingDate,
      closingDate: vacancyDetail.closingDate
    };
  }
  public get(publicId: string): Observable<IVacancyDetail> {
    return of(data.find(v => v.publicId === publicId)).pipe(
      tap(v => console.log('service', v))
    );
  }
}
