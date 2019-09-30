import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IFunction } from 'epromotion';
import { FunctionService } from '../function.service';

@Component({
  selector: 'fps-function-picker',
  templateUrl: './function-picker.component.html',
  styles: []
})
export class FunctionPickerComponent implements OnInit {
  private static functions: IFunction[];
  private static isDataLoaded = false;

  @Input() public readonly control: FormControl;
  @Input() public readonly initialDisplay = '';

  public options: IFunction[];
  private areOptionsLoaded = false;

  constructor(private functionService: FunctionService) {
    /**/
  }

  public ngOnInit(): void {
    this.options = FunctionPickerComponent.isDataLoaded
      ? FunctionPickerComponent.functions
      : [{ id: this.control.value, name: this.initialDisplay }];
  }

  public onOpen(isOpening: boolean): void {
    if (!isOpening) { return; }

    if (!FunctionPickerComponent.isDataLoaded) { // First opening ever
      this.functionService.getAll().subscribe(response => {
        FunctionPickerComponent.functions = response;
        this.options = FunctionPickerComponent.functions;

        FunctionPickerComponent.isDataLoaded = true;
        this.areOptionsLoaded = true;
      });
    } else if (!this.areOptionsLoaded) { // First opening of this component
      this.options = FunctionPickerComponent.functions;
      this.areOptionsLoaded = true;
    }
  }
}
