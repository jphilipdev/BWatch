import { Inject, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { TOASTR_TOKEN, Toastr } from '@shared/services/toastr.service';
import { validateDuration } from '@shared/directives/durationValidator/duration-validator';

@Component({
  selector: 'activities',
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
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
    const mockSocket = new WebSocket('ws://localhost:8080');
    mockSocket.onopen = function open(event) {
      console.log('opened', event)
    };

    mockSocket.onerror = function er(event) {
      console.log('error', event)
    };

    mockSocket.send('message from activities')

    mockSocket.onmessage = event => {
      console.log('message received in activities', event);
    };

    let activityName = new FormControl(null, Validators.required);
    let duration = new FormControl(null, [Validators.required, validateDuration]);
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
      this.activitiesService.addActivity({ name: activityName, isImportant: !!isImportant, duration })
        .subscribe(() => this.showAddSuccess(activityName));
    }
  }

  private showAddSuccess(activityName) {
    this.toastr.success(activityName, 'Activity Added!')
  }
}
