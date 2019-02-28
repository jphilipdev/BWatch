import { Component } from '@angular/core';
import { ActivitiesService } from './activities.service';

@Component({
  selector: 'activities',
  templateUrl: './activities.html'
})

export class ActivitiesComponent {

  activities: any

  constructor(private activitiesService: ActivitiesService) {
    this.activities = activitiesService.getActivities();
  }
}
