import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpandPanel } from './components/expandPanel/expand-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';
import { DurationValidatorDirective } from './directives/durationValidator/duration-validator.directive';
import { ImportantPipe } from './pipes/important.pipe';
import { HttpService } from './services/http.service';
import { TOASTR_TOKEN, Toastr } from './services/toastr.service';
import { JQUERY_TOKEN } from './services/jquery.service';
import { MatSliderModule, MatListModule, MatExpansionModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

declare let toastr: Toastr
declare let $: any

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSliderModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
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
    ImportantPipe,
    MatSliderModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class SharedModule { }
