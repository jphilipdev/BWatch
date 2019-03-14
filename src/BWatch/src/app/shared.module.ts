import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpandPanel } from './expandPanel/expandPanel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpandPanel],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ExpandPanel
  ]
})

export class SharedModule { }
