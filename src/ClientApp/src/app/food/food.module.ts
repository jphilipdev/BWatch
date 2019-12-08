import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { foodRoutes } from './food.routes';
import { FoodComponent } from './food.component';
import { AddFoodComponent } from './add-food.component';
import { FoodService } from './food.service';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from 'app/effects/foodEffects';

@NgModule({
  imports: [
    RouterModule.forChild(foodRoutes),
    SharedModule,
    EffectsModule.forRoot([FoodEffects])
  ],
  declarations: [
    FoodComponent,
    AddFoodComponent
  ],
  entryComponents: [AddFoodComponent],
  providers: [FoodService]
})

export class FoodModule { }
