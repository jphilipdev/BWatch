import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { BWatchComponent } from './bwatch/bwatch.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MedicineComponent } from './medicine/medicine.component';

import { ActivitiesService } from './activities/activities.service';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MainComponent,
    BWatchComponent,
    ActivitiesComponent,
    MedicineComponent
  ],
  providers: [ActivitiesService],
  bootstrap: [MainComponent]
})
export class AppModule { }
