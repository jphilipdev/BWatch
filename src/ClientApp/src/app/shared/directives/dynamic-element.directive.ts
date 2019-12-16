import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-element]'
})
export class DynamicElementDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
