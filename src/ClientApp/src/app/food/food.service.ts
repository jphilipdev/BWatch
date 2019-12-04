import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

@Injectable()
export class FoodService {
  constructor(private http: HttpService) {
  }

  getFoods = () => {
    return this.http.get('/api/foods');
  }

  addFood = (food: any) => {
    return this.http.post('/api/foods', food);
  }
}
