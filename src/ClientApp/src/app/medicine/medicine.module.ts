import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MedicineContainerComponent } from './medicine-container.component';
import { MedicineComponent } from './medicine.component';
import { AddMedicineComponent } from './add-medicine.component';
import { medicineRoutes } from './medicine.routes';
import { MedicineService } from './medicine.service';
import { MedicineEffects } from '@redux/effects/medicineEffects';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(medicineRoutes),
    EffectsModule.forRoot([MedicineEffects])
  ],
  declarations: [
    MedicineContainerComponent,
    MedicineComponent,
    AddMedicineComponent
  ],
  entryComponents: [AddMedicineComponent],
  providers: [MedicineService]
})

export class MedicineModule {}
