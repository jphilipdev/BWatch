import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MedicineComponent } from './medicine.component';
import { AddMedicineComponent } from './add-medicine.component';
import { medicineRoutes } from './medicine.routes';
import { MedicineService } from './medicine.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(medicineRoutes)
  ],
  declarations: [
    MedicineComponent,
    AddMedicineComponent
  ],
  entryComponents: [AddMedicineComponent],
  providers: [MedicineService]
})

export class MedicineModule {}
