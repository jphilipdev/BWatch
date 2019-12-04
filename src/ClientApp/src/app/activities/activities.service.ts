import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';

@Injectable()
export class ActivitiesService {
   constructor(private http: HttpService) {
   }

  getActivities = () => {
    return this.http.get('/api/activities');
  }

  addActivity = (activity: any) => {
    return this.http.post('/api/activities', activity);
  }
}
