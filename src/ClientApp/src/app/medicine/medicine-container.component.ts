import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMedicines, addMedicine } from '@redux/actions/medicineActions';
import { medicines, loadMedicinesApi, addMedicineApi } from '@redux/selectors/medicineSelectors';
import { bindActionCreator } from '@redux/utils';

@Component({
  selector: 'medicine-container',
  template: `
    <medicine
      [medicines]="medicines$ | async"
      [loadMedicines]="loadMedicines"
      [loadMedicinesApi]="loadMedicinesApi$ | async"
      [addMedicine]="addMedicine"
      [addMedicineApi]="addMedicineApi$ | async">
    </medicine>
  `
})
export class MedicineContainerComponent {
  private medicines$: Observable<any>;
  private loadMedicines: any;
  private loadMedicinesApi$: Observable<any>;
  private addMedicine: any;
  private addMedicineApi$: Observable<any>;

  constructor(private store: Store<{ medicine: any }>) {
    this.medicines$ = this.store.select(medicines);
    this.loadMedicines = bindActionCreator(this.store, loadMedicines.request);
    this.loadMedicinesApi$ = this.store.select(loadMedicinesApi);
    this.addMedicine = bindActionCreator(this.store, addMedicine.request);
    this.addMedicineApi$ = this.store.select(addMedicineApi);
  }
}
