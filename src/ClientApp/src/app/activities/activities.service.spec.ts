import { ActivitiesService } from './activities.service';
import { of } from 'rxjs';

describe('ActivitiesService', () => {
  let subject: ActivitiesService
  let http

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get', 'post']);
    subject = new ActivitiesService(http);
  });

  describe('addActivity', () => {
    it('should make http post with the correct URL', () => {
      const activity = { };

      subject.addActivity(activity);

      expect(http.post).toHaveBeenCalledWith('/api/activities', jasmine.any(Object));
    });

    it('should make http post with the supplied activity', () => {
      const activity = { name: 'test' };

      subject.addActivity(activity);

      expect(http.post).toHaveBeenCalledWith(jasmine.any(String), activity);
    });

    it('should return the observable value from the http post', () => {
      const activity = { };
      const returnValue = of({ return: 'value '});
      http.post.and.returnValue(returnValue);

      const result = subject.addActivity(activity);

      expect(result).toBe(returnValue);
    });
  });
});
