import { Inject, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../shared/services/toastr.service';

@Component({
  selector: 'activities',
  templateUrl: './activities.html',
  styles: [`
    .formError { background-color: red; }
  `]
})

export class ActivitiesComponent implements OnInit {
  activities: any
  activityForm: FormGroup

  constructor(
    route: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      this.activities = route.snapshot.data['activities'];
  }

  ngOnInit() {

    let activityName = new FormControl('name', Validators.required);
    let duration = new FormControl('duration');
    let isImportant = new FormControl('isImportant');
    this.activityForm = new FormGroup({
      activityName,
      duration,
      isImportant
    });
  }

  addActivity(formValues) {
    if(this.activityForm.valid) {
      this.toastr.success(formValues.activityName, 'Activity Added!');
    }
  }
}
