import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BWatchComponent } from './bwatch/bwatch.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BWatchComponent
  ],
  providers: [],
  bootstrap: [BWatchComponent]
})
export class AppModule { }
