import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivitiesService } from './activities.service';

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

  constructor(private activitiesService: ActivitiesService) {
  }

  ngOnInit() {
    this.activities = this.activitiesService.getActivities();

    let activityName = new FormControl('name', Validators.required);
    this.activityForm = new FormGroup({
      activityName
    });
  }

  addActivity(formValues) {
    if(this.activityForm.valid) {
      console.log('activity', formValues.activityName)
    }
  }
}
