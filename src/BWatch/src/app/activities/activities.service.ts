import { Injectable } from '@angular/core';

@Injectable()
export class ActivitiesService {
  getActivities = () => {
    return [
      { name: 'Jumping' },
      { name: 'Gym' }
    ]
  }
}
