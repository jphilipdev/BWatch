import { Routes } from '@angular/router';
import { BWatchComponent } from './bwatch/bwatch.component';

export const appRoutes:Routes = [
  {
    path: 'activities',
    loadChildren: './activities/activities.module#ActivitiesModule'
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
