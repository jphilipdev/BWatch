import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesResolver } from './activities.resolver';

export const activitiesRoutes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
    resolve: { activities: ActivitiesResolver }
  }
]
