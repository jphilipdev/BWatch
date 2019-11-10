import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'AddFood',
  templateUrl: './add-food.html',
  styleUrls: ['./add-food.css']
})

export class AddFoodComponent implements OnInit {
  foodForm: FormGroup

  constructor(public dialogRef: MatDialogRef<AddFoodComponent>) {
  }

  ngOnInit(): void {
    let foodName = new FormControl(null, Validators.required);
    let foodQuantity = new FormControl(null, Validators.required);
    this.foodForm = new FormGroup({
      foodName,
      foodQuantity
    })
  }

  addFood(foodFormValues){
    const { foodName, foodQuantity } = foodFormValues;
    if(this.foodForm.valid) {
      this.dialogRef.close({ foodName, foodQuantity });
    }
  }
}
