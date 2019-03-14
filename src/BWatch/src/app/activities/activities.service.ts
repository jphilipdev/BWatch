import { Injectable } from '@angular/core';

@Injectable()
export class ActivitiesService {
  getActivities = () => {
    return [
      { name: 'Jumping', isImportant: true },
      { name: 'Gym', isImportant: false }
    ]
  }
}
