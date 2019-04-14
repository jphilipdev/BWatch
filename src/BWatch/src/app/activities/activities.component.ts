import { Inject, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { TOASTR_TOKEN, Toastr } from '../shared/services/toastr.service';
import { validateDuration } from '../shared/directives/durationValidator/duration-validator';

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
    private activitiesService: ActivitiesService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      this.activities = route.snapshot.data['activities'];
  }

  ngOnInit() {

    let activityName = new FormControl(null, Validators.required);
    let duration = new FormControl(null, validateDuration);
    let isImportant = new FormControl();
    this.activityForm = new FormGroup({
      activityName,
      duration,
      isImportant
    });
  }

  addActivity(formValues) {
    const { activityName, duration, isImportant } = formValues;
    if(this.activityForm.valid) {
      this.activitiesService.addActivity({ name: activityName, isImportant, duration })
        .subscribe(() => this.showAddSuccess(activityName));
    }
  }

  private showAddSuccess(activityName) {
    this.toastr.success(activityName, 'Activity Added!')
  }
}
