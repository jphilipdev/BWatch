import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicine.service';

@Component({
  selector: 'medicine',
  templateUrl: './medicine.html',
  styleUrls: ['./medicine.css']
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
