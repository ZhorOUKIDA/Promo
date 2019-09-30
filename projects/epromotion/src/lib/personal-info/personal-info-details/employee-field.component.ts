import { Component, Input } from '@angular/core';

@Component({
  selector: 'fps-employee-field',
  templateUrl: './employee-field.component.html',
  styleUrls: ['./employee-field.component.scss']
})
export class EmployeeFieldComponent {
  @Input() public label: string;
  @Input() public value: string;
}
