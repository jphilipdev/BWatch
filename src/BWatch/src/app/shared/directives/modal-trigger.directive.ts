import { Directive, Input, OnInit, Inject, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from '../services/jquery.service';

@Directive({
    selector: '[modal-trigger]'
  }
)

export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId: string
  element: HTMLElement

  constructor(
    ref: ElementRef,
    @Inject(JQUERY_TOKEN) private $: any) {
      this.element = ref.nativeElement;
   }

  ngOnInit(): void {
    this.element.addEventListener('click', e => {
      const test = this.$(`#${this.modalId}`);
      test.modal({});
    });
  }
}
