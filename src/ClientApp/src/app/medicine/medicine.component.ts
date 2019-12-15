import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMedicineComponent } from './add-medicine.component';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';
import { OnChange } from '@shared/decorators/on-change.decorator';

@Component({
  selector: 'medicine',
  templateUrl: './medicine.html',
  styleUrls: ['./medicine.css']
})

export class MedicineComponent implements OnInit {

  @Input() medicines: any;
  @Input() loadMedicines: any;
  @Input() addMedicine: any;
  @Input() loadMedicinesApi: any;

  @OnChange(function (value) { this.addMedicineApiChanged(value) })
  @Input() addMedicineApi: any;

  private addedMedicine: any;

  constructor(private dialog: MatDialog, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.loadMedicines();
  }

  addMedicineApiChanged(value) {
    if (value.success) {
      this.toastr.success(this.addedMedicine.medicineName, 'Medicine Added!');
    }

    if (value.failure) {
      this.toastr.error(value.error.message, 'Error Adding Medicine');
    }
  }


  onAddMedicineClicked(): void {
    let dialogRef = this.dialog.open(AddMedicineComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addedMedicine = result;
      this.addMedicine(result.medicineName, result.medicineQuantity);
    });
  }
}
