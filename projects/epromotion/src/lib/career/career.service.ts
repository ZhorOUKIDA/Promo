import { Injectable } from '@angular/core';
import { ICareerLine } from 'epromotion';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private _career: ICareerLine[] = [
    {
      publicId: '123456',
      startDate: new Date(2000, 11, 1),
      endDate: new Date(2018, 5, 30),
      serviceCode: '_ICT4.2',
      serviceName: 'ICT4.2',
      postName: 'Brussels',
      statutoryFunctionId: 1,
      statutoryFunctionName: 'Software Engineer',
      gradeName: 'A3',
      careerTypeId: 1
    },
    {
      publicId: '123457',
      startDate: new Date(2018, 6, 1),
      endDate: null,
      serviceCode: '_ICT4.1',
      serviceName: 'ICT4.1',
      postName: 'Brussels',
      statutoryFunctionId: 42,
      statutoryFunctionName: 'Business Analist',
      gradeName: 'A2',
      careerTypeId: 1
    }
  ];

  public getAll(): Observable<ICareerLine[]> {
    return of(this._career);
  }

  public create(careerLine: ICareerLine): Observable<ICareerLine> {
    careerLine.publicId = new Date().getTime().toString();
    careerLine.serviceCode = '007';
    careerLine.statutoryFunctionName = 'Nope';

    return of(careerLine);
  }

  public update(careerLine: ICareerLine): Observable<ICareerLine> {
    return of(careerLine);
  }

  public archive(careerLine: ICareerLine): Observable<boolean> {
    return of(true);
  }
}
