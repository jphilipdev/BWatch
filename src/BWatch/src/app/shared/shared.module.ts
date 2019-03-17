import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpandPanel } from '../expandPanel/expandPanel.component';
import { ImportantPipe } from './pipes/important.pipe';
import { TOASTR_TOKEN, Toastr } from './services/toastr.service';

declare let toastr: Toastr

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandPanel,
    ImportantPipe
  ],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ExpandPanel,
    ImportantPipe
  ]
})

export class SharedModule { }
