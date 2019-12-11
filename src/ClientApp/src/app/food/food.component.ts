import { Component, OnInit, Inject, Input, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddFoodComponent } from './add-food.component';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';

@Component({
  selector: 'food',
  templateUrl: './food.html',
  styleUrls: ['./food.css']
})

export class FoodComponent implements OnInit, OnChanges {
  @Input() foods: any;
  @Input() loadFoods: any;
  @Input() loadFoodsApi: any;
  @Input() addFood: any;
  @Input() addFoodApi: any;

  constructor(public dialog: MatDialog, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.loadFoods();
  }

  ngOnChanges(changes: any): void {
    if (changes.addFoodApi && changes.addFoodApi.previousValue) {
      if (!changes.addFoodApi.previousValue.success && this.addFoodApi.success) {
        this.toastr.success('meh', 'Food Added!');
      }

      if (!changes.addFoodApi.previousValue.failure && this.addFoodApi.failure) {
        this.toastr.error('meh', 'Error Adding Food');
      }
    }
  }

  onAddFoodClicked(): void {
    let dialogRef = this.dialog.open(AddFoodComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addFood(result.foodName, result.foodQuantity);
    })
  }
}
