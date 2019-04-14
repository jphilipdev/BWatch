import { AbstractControl, ValidationErrors } from '@angular/forms';

export const validateDuration = (control: AbstractControl): ValidationErrors => {
  if(isNaN(Number(control.value))) {
    return { validateDuration: true };
  }
  return null;
}
