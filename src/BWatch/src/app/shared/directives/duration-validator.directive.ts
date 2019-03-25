import { Directive } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validate-duration]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DurationValidatorDirective, multi: true }]
})

export class DurationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    if(isNaN(Number(control.value))) {
      return { validateDuration: true };
    }
    return null;
  }
}
