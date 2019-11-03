import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';

@Component({
  selector: 'food',
  templateUrl: './food.html'
})

export class FoodComponent implements OnInit {
  private foods: any;
  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe(foods => {
      this.foods = foods;
    });
  }
 }
