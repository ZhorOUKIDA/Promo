import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'epromotion';

@Component({
  selector: 'fps-personal-info-container',
  templateUrl: './personal-info-container.component.html',
  styleUrls: ['./personal-info-container.component.scss'],
})
export class PersonalInfoContainerComponent implements OnInit {
  public employee: IEmployee;

  constructor(private readonly route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data.forEach(data => {
      this.employee = this.route.snapshot.data.info;
    });
  }
}
