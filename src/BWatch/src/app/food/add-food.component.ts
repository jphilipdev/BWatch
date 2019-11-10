import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'AddFood',
  templateUrl: './add-food.html',
  styleUrls: ['./add-food.css']
})

export class AddFoodComponent implements OnInit {
  foodForm: FormGroup

  constructor(public dialogRef: MatDialogRef<AddFoodComponent>, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.foodForm = this.formBuilder.group({
      foodName: ['', Validators.required],
      foodQuantity: ['', Validators.required]
    });
  }

  addFood({ foodName, foodQuantity }){
    if(this.foodForm.valid) {
      this.dialogRef.close({ foodName, foodQuantity });
    }
  }
}
