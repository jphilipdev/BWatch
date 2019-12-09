import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddFoodComponent } from './add-food.component';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';
import { loadFoods, addFood, addFoodSuccess } from '@actions/foodActions';


@Component({
  selector: 'food',
  templateUrl: './food.html',
  styleUrls: ['./food.css']
})

export class FoodComponent implements OnInit {
  private foods$: Observable<any> = this.store.select(state => state.food.foods);
  constructor(private store: Store<{food: any}>, public dialog: MatDialog, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.loadFoods();
  }

  private loadFoods() {
    this.store.dispatch({type: loadFoods.type});
  }

  onAddFoodClicked(): void {
    let dialogRef = this.dialog.open(AddFoodComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addFood({name: result.foodName, quantity: result.foodQuantity});
    })
  }

  private addFood(food): void {
    this.store.dispatch({type: addFood.type, payload: food});
    // this.foodService.addFood(food).subscribe(()=> {
    //   this.toastr.success(food.name, 'Food Added!');
    //   this.getFoods();
    // });
  }
 }
