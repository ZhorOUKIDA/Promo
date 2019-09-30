import { FormGroup } from '@angular/forms';

export function dateRangeValidator(
  formGroup: FormGroup
): { [key: string]: any } {
  if (!formGroup || !formGroup.controls) {
    return null;
  }

  const dateRangeControl = formGroup.controls.dateRange;
  const value = dateRangeControl.value;

  const startDate = value.startDate;
  const endDate = value.endDate;
  const hasError = !!startDate && !!endDate && startDate < endDate;

  return hasError ? { dateRangeValidator: 'mustEndAfterStart' } : null;
}
