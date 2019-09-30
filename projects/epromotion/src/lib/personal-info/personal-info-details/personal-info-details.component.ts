import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IEmployee } from '../../domain';

@Component({
  selector: 'fps-personal-info-details',
  templateUrl: './personal-info-details.component.html',
  styleUrls: ['./personal-info-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoDetailsComponent {
  @Input() public readonly employee: IEmployee;
}
