import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MedicineComponent } from './medicine.component';
import { medicineRoutes } from './medicine.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(medicineRoutes)
  ],
  declarations: [MedicineComponent]
})

export class MedicineModule {}
