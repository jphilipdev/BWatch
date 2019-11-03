import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { BWatchComponent } from './bwatch/bwatch.component';

import { ActivitiesService } from './activities/activities.service';

import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  declarations: [
    MainComponent,
    NavComponent,
    BWatchComponent,
  ],
  providers: [ActivitiesService],
  bootstrap: [MainComponent],
})
export class AppModule { }
