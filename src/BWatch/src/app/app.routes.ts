import { Routes } from '@angular/router';

import { ActivitiesComponent } from './activities/activities.component';
import { BWatchComponent } from './bwatch/bwatch.component';

export const appRoutes:Routes = [
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'medicine',
    loadChildren: './medicine/medicine.module#MedicineModule'
  },
  {
    path: '',
    component: BWatchComponent
  },
];
