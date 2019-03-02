import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './medicine.html'
})

export class MedicineComponent {
  constructor(private router: Router) {

  }

  clickHandler() {
    this.router.navigate(['']);
  }
}
