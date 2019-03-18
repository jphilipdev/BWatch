import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpandPanel } from './components/expandPanel/expand-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';
import { ImportantPipe } from './pipes/important.pipe';
import { TOASTR_TOKEN, Toastr } from './services/toastr.service';
import { JQUERY_TOKEN } from './services/jquery.service';

declare let toastr: Toastr
declare let $: any

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandPanel,
    ModalComponent,
    ModalTriggerDirective,
    ImportantPipe
  ],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQUERY_TOKEN,
      useValue: $
    }
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ExpandPanel,
    ModalComponent,
    ModalTriggerDirective,
    ImportantPipe
  ]
})

export class SharedModule { }
