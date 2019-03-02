import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MedicineComponent } from './medicine.component';
import { medicineRoutes } from './medicine.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(medicineRoutes)
  ],
  declarations: [MedicineComponent],
  bootstrap: [MedicineComponent]
})

export class MedicineModule {}
