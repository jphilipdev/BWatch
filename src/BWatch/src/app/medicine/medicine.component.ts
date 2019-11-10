import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicine.service';

@Component({
  templateUrl: './medicine.html'
})

export class MedicineComponent implements OnInit {
  medicines: any

  constructor(private medicineService: MedicineService) {
  }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe(medicines => {
      this.medicines = medicines;
    });
  }
}
