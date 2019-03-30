import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpandPanel } from './components/expandPanel/expand-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';
import { DurationValidatorDirective } from './directives/duration-validator.directive';
import { ImportantPipe } from './pipes/important.pipe';
import { HttpService } from './services/http.service';
import { TOASTR_TOKEN, Toastr } from './services/toastr.service';
import { JQUERY_TOKEN } from './services/jquery.service';

declare let toastr: Toastr
declare let $: any

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ExpandPanel,
    ModalComponent,
    ModalTriggerDirective,
    DurationValidatorDirective,
    ImportantPipe
  ],
  providers: [
    HttpService,
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
    DurationValidatorDirective,
    ImportantPipe
  ]
})

export class SharedModule { }
