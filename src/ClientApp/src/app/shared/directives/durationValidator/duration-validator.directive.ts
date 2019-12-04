import { Directive } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { validateDuration } from './duration-validator';

@Directive({
  selector: '[validate-duration]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DurationValidatorDirective, multi: true }]
})

export class DurationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return validateDuration(control);
  }
}
