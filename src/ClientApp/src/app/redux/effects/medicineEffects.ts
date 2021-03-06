import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MedicineService } from 'app/medicine/medicine.service';
import { createApiEffect } from '@redux/utils';
import { loadMedicines, addMedicine } from '@redux/actions/medicineActions';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicineEffects {
  constructor(private store: Store<{ medicine: any}>, private actions$: Actions, private medicineService: MedicineService) {
  }

  loadMedicines$ = createApiEffect(this.store, this.actions$, loadMedicines, () => this.medicineService.getMedicines(), 'Error loading medicines');

  addMedicine$ = createApiEffect(this.store, this.actions$, addMedicine, medicine => this.medicineService.addMedicine(medicine), 'Error adding medicine');

  addMedicineSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addMedicine.success.type),
    map(() => loadMedicines.request())
  ));
}

