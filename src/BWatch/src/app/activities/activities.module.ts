import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { activitiesRoutes } from './activities.routes';
import { ActivitiesComponent } from './activities.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(activitiesRoutes),
    SharedModule
  ],
  declarations: [ActivitiesComponent],
  bootstrap: [ActivitiesComponent]
})

export class ActivitiesModule { }
