import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancyDetail } from 'epromotion';

@Component({
  selector: 'fps-vacancy-detail-container',
  templateUrl: './vacancy-detail-container.component.html'
})
export class VacancyDetailContainerComponent implements OnInit {
  public vacancy: IVacancyDetail;
  constructor(private readonly route: ActivatedRoute) {
    /* */
  }

  public ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.vacancy = data.vacancy;
      console.log(this.vacancy);
    });
  }
}
