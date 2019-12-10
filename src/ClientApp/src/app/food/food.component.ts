import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddFoodComponent } from './add-food.component';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';
import { loadFoods, addFood, addFoodSuccess } from '@actions/foodActions';
import { tap, filter } from 'rxjs/operators';


@Component({
  selector: 'food',
  templateUrl: './food.html',
  styleUrls: ['./food.css']
})

export class FoodComponent implements OnInit {
  private foods$: Observable<any> = this.store.select(state => state.food.foods);

  constructor(private store: Store<{ food: any }>, public dialog: MatDialog, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    this.showToastrSuccessWhenAddFoodSuccess();
    this.showToastrErrorWhenAddFoodFailure();
  }

  private showToastrSuccessWhenAddFoodSuccess() {
    this.store.pipe(select(state => state.food.addFood.success), filter(success => success)).subscribe(() => this.toastr.success('meh', 'Food Added!'));
  }

  private showToastrErrorWhenAddFoodFailure() {
    this.store.pipe(select(state => state.food.addFood.failure), filter(failure => failure)).subscribe(() => this.toastr.error('meh', 'Error Adding Food'));
  }

  ngOnInit(): void {
    this.loadFoods();
  }

  private loadFoods() {
    this.store.dispatch({ type: loadFoods.type });
  }

  onAddFoodClicked(): void {
    let dialogRef = this.dialog.open(AddFoodComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addFood({ name: result.foodName, quantity: result.foodQuantity });
    })
  }

  private addFood(food): void {
    this.store.dispatch({ type: addFood.type, payload: food });
  }
}
