import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITraining } from '../domain';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private _training: ITraining[] = [
    {
      publicId: '123456',
      startDate: new Date(1987, 10, 4),
      endDate: new Date(1999, 4, 5),
      organization: 'FPS Foreign Affairs',
      subject: 'Bla bla bla'
    },
    {
      publicId: '123457',
      startDate: new Date(1999, 10, 4),
      organization: 'BOSA',
      subject: 'Lorem ipsum'
    }
  ];

  public getAll(): Observable<ITraining[]> {
    return of(this._training);
  }

  public create(trainingLine: ITraining): Observable<ITraining> {
    trainingLine.publicId = new Date().getTime().toString();

    return of(trainingLine);
  }

  public update(trainingLine: ITraining): Observable<ITraining> {
    return of(trainingLine);
  }

  public archive(trainingLine: ITraining): Observable<boolean> {
    return of(true);
  }
}
