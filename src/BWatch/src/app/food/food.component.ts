import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FoodService } from './food.service';
import { AddFoodComponent } from './add-food.component';
import { TOASTR_TOKEN, Toastr } from '../shared/services/toastr.service';

@Component({
  selector: 'food',
  templateUrl: './food.html',
  styleUrls: ['./food.css']
})

export class FoodComponent implements OnInit {
  private foods: any;
  constructor(public dialog: MatDialog, private foodService: FoodService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.getFoods();
  }

  private getFoods() {
    this.foodService.getFoods().subscribe(foods => {
      this.foods = foods;
    });
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
    this.foodService.addFood(food).subscribe(()=> {
      this.toastr.success(food.name, 'Food Added!');
      this.getFoods();
    });
  }
 }
