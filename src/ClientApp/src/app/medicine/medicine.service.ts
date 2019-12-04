import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

@Injectable()
export class MedicineService {
  constructor(private http: HttpService) {
  }

  public getMedicines() {
    return this.http.get('/api/medicines');
  }

  public addMedicine(medicine) {
    return this.http.post('/api/medicines', medicine);
  }
}
