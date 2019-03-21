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
    path: 'food',
    loadChildren: './food/food.module#FoodModule'
  },
  {
    path: '',
    component: BWatchComponent
  },
];
