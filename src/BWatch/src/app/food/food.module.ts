import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { foodRoutes } from './food.routes';
import { FoodComponent } from './food.component';
import { FoodService } from './food.service';

@NgModule({
  imports: [
    RouterModule.forChild(foodRoutes),
    SharedModule
  ],
  declarations: [FoodComponent],
  providers: [FoodService]
})

export class FoodModule { }
