import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IDepartment } from 'epromotion';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'fps-department-picker',
  templateUrl: './department-picker.component.html',
  styles: []
})
export class DepartmentPickerComponent implements OnInit {
  private static departments: IDepartment[];
  private static isDataLoaded = false;

  @Input() public readonly control: FormControl;
  @Input() public readonly initialDisplay = '';

  public options: IDepartment[];
  private areOptionsLoaded = false;

  constructor(private departmentService: DepartmentService) {
    /**/
  }

  public ngOnInit(): void {
    this.options = DepartmentPickerComponent.isDataLoaded
      ? DepartmentPickerComponent.departments
      : [{ code: this.control.value, name: this.initialDisplay }];
  }

  public onOpen(isOpening: boolean): void {
    if (!isOpening) { return; }

    if (!DepartmentPickerComponent.isDataLoaded) { // First opening ever
      this.departmentService.getAll().subscribe(response => {
        DepartmentPickerComponent.departments = response;
        this.options = DepartmentPickerComponent.departments;

        DepartmentPickerComponent.isDataLoaded = true;
        this.areOptionsLoaded = true;
      });
    } else if (!this.areOptionsLoaded) { // First opening of this component
      this.options = DepartmentPickerComponent.departments;
      this.areOptionsLoaded = true;
    }
  }
}
