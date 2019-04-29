import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { activitiesRoutes } from './activities.routes';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesResolver } from './activities.resolver';
import { SharedModule } from '../shared/shared.module';
import { HttpService } from '../shared/services/http.service';

@NgModule({
  imports: [
    RouterModule.forChild(activitiesRoutes),
    SharedModule
  ],
  declarations: [ActivitiesComponent],
  providers: [
    ActivitiesResolver,
    HttpService
  ]
})

export class ActivitiesModule { }
