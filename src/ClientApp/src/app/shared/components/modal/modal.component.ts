import { Component, Input, ViewChild, ContentChild, ElementRef, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../../services/jquery.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styles: [`
    .modal-header { align-items: center; }
    .modal-body: { height: 20rem; overflow-y: scroll; }
    .modal-container .modal-dialog .modal-content { background: #fffaf0; border: 0.3rem solid #61c7d3; }
  `]
})

export class ModalComponent implements OnInit {
  @Input() modalId: string
  @Input() title: string
  @ViewChild('modalcontainer') modalContainer: ElementRef
  @ContentChild('closemodal') closeModal: ElementRef

  constructor(@Inject(JQUERY_TOKEN) private $) {
  }

  ngOnInit() {
    this.closeModal.nativeElement.addEventListener('click', () => {
      this.$(this.modalContainer.nativeElement).modal('hide');
    });
  }
}
