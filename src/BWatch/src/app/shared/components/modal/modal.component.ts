import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styles: [`
    .modal-body: { height: 20rem; overflow-y: scroll; }
  `]
})

export class ModalComponent {
  @Input() modalId: string
  @Input() title: string
}
