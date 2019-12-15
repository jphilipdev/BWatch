import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddFoodComponent } from './add-food.component';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';
import { OnChange } from '@shared/decorators/on-change.decorator';

@Component({
  selector: 'food',
  templateUrl: './food.html',
  styleUrls: ['./food.css']
})

export class FoodComponent implements OnInit {

  @Input() foods: any;
  @Input() loadFoods: any;
  @Input() addFood: any;
  @Input() loadFoodsApi: any;

  @OnChange(function (value) { this.addFoodApiChanged(value) })
  @Input() addFoodApi: any;

  private addedFood: any;

  constructor(public dialog: MatDialog, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.loadFoods();
  }

  private addFoodApiChanged(value) {
    if (value.success) {
      this.toastr.success(this.addedFood.foodName, 'Food Added!');
    }

    if (value.failure) {
      this.toastr.error(value.error.message, 'Error Adding Food');
    }
  }

  onAddFoodClicked(): void {
    let dialogRef = this.dialog.open(AddFoodComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addedFood = result;
      this.addFood(result.foodName, result.foodQuantity);
    })
  }
}
