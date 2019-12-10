import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadFoods, addFood } from '@actions/foodActions';

@Component({
  selector: 'food-container',
  templateUrl: './food-container.html'
  // template: `
  // <food
  //   foods="foods$ | async"
  //   loadFoodApi="loadFoodsApi$ | async"
  //   addFoodApi="addFoodApi$ | async"
  //   addFood="addFood">
  // </food>`
})
export class FoodContainerComponent {
  private foods$: Observable<any>;
  private loadFoods: any;
  private loadFoodsApi$: Observable<any>;
  private addFood: any;
  private addFoodApi$: Observable<any>;

  constructor(private store: Store<{ food: any }>) {
    this.foods$ = this.store.select(state => state.food.foods);
    this.loadFoods = () => this.store.dispatch({ type: loadFoods.type });
    this.loadFoodsApi$ = this.store.select(state => state.food.loadFood);
    this.addFood = (food) => this.store.dispatch({ type: addFood.type, payload: food });
    this.addFoodApi$ = this.store.select(state => state.food.addFood);
  }
}
