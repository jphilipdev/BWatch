import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivitiesService } from './activities.service';

@Injectable()
export class ActivitiesResolver implements Resolve<any> {
  constructor(private activitiesService: ActivitiesService) {
  }

  resolve() {
    return this.activitiesService.getActivities();
  }
}
