import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadFoods, addFood } from '@redux/actions/foodActions';
import { foods, loadFoodsApi, addFoodApi } from '@redux/selectors/foodSelectors';
import { bindActionCreator } from '@redux/utils';

@Component({
  selector: 'food-container',
  template: `
    <food
      [foods]="foods$ | async"
      [loadFoods]="loadFoods"
      [loadFoodsApi]="loadFoodsApi$ | async"
      [addFood]="addFood"
      [addFoodApi]="addFoodApi$ | async">
    </food>
  `
})
export class FoodContainerComponent {
  private foods$: Observable<any>;
  private loadFoods: any;
  private loadFoodsApi$: Observable<any>;
  private addFood: any;
  private addFoodApi$: Observable<any>;

  constructor(private store: Store<{ food: any }>) {
    this.foods$ = this.store.select(foods);
    this.loadFoods = bindActionCreator(this.store, loadFoods.request);
    this.loadFoodsApi$ = this.store.select(loadFoodsApi);
    this.addFood = bindActionCreator(this.store, addFood.request);
    this.addFoodApi$ = this.store.select(addFoodApi);
  }
}
