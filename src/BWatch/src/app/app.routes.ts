import { Routes } from '@angular/router';

import { ActivitiesComponent } from './activities/activities.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BWatchComponent } from './bwatch/bwatch.component';

export const appRoutes:Routes = [
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: '',
    component: BWatchComponent
  },
];
