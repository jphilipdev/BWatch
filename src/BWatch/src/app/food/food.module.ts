import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { foodRoutes } from './food.routes';
import { FoodComponent } from './food.component';

@NgModule({
  imports: [
    RouterModule.forChild(foodRoutes),
    SharedModule
  ],
  declarations: [FoodComponent]
})

export class FoodModule { }
