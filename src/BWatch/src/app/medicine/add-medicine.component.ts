import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'add-medicine',
  templateUrl: './add-medicine.html',
  styleUrls: ['./add-medicine.css']
})

export class AddMedicineComponent implements OnInit {
  medicineForm: FormGroup

  constructor(private dialogRef: MatDialogRef<AddMedicineComponent>, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.medicineForm = this.formBuilder.group({
      medicineName: ['', Validators.required],
      medicineQuantity: ['', Validators.required]
    });
  }

  addMedicine({medicineName, medicineQuantity}) {
    if(this.medicineForm.valid) {
      this.dialogRef.close({medicineName, medicineQuantity});
    }
  }
}
