import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpandPanel } from './expandPanel/expandPanel.component';
import { ImportantPipe } from './pipes/important.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExpandPanel,
    ImportantPipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ExpandPanel,
    ImportantPipe
  ]
})

export class SharedModule { }
