import { Component, OnInit, Inject } from '@angular/core';
import { MedicineService } from './medicine.service';
import { MatDialog } from '@angular/material';
import { AddMedicineComponent } from './add-medicine.component';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';

@Component({
  selector: 'medicine',
  templateUrl: './medicine.html',
  styleUrls: ['./medicine.css']
})

export class MedicineComponent implements OnInit {
  medicines: any
  constructor(private medicineService: MedicineService, private dialog: MatDialog, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.getMedicines();
  }

  private getMedicines() {
    this.medicineService.getMedicines().subscribe(medicines => {
      this.medicines = medicines;
    });
  }

  onAddMedicineClicked(): void {
    let dialogRef = this.dialog.open(AddMedicineComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addMedicine({name: result.medicineName, quantity: result.medicineQuantity });
    });
  }

  private addMedicine(medicine) {
    this.medicineService.addMedicine(medicine).subscribe(() => {
      this.getMedicines();
    })
  }
}
