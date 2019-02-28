import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BWatchComponent } from './bwatch/bwatch.component';
import { ActivitiesComponent } from './activities/activities.component';

import { ActivitiesService } from './activities/activities.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BWatchComponent,
    ActivitiesComponent
  ],
  providers: [ActivitiesService],
  bootstrap: [BWatchComponent]
})
export class AppModule { }
