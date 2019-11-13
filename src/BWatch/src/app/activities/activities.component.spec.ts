import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesResolver } from './activities.resolver';
import { ActivitiesService } from './activities.service';
import { SharedModule } from '@shared/shared.module';
import { TOASTR_TOKEN } from '@shared/services/toastr.service';
import { ExpandPanel } from '@shared/components/expandPanel/expand-panel.component';

describe('ActivitiesComponent', () => {
  let fixture: ComponentFixture<ActivitiesComponent>;
  let component: ActivitiesComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    let route = { snapshot: { data: {} } };
    let activitesResolver = {};
    let activitesService = { addActivity: function () { } };
    let toastr = { success: function () { } };

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        SharedModule],
      declarations: [ActivitiesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: ActivitiesResolver, useValue: activitesResolver },
        { provide: ActivitiesService, useValue: activitesService },
        { provide: TOASTR_TOKEN, useValue: toastr }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have a title of Activities', () => {
    expect(element.querySelector('h2').textContent).toBe('Activities');
  });

  it('should render an expand-panel for each activity', () => {
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.data = { activities: [{ name: 'one' }, { name: 'two' }] };
    fixture = TestBed.createComponent(ActivitiesComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.directive(ExpandPanel)).length).toBe(2);
  });

  it('should mark activity name as invalid if is not supplied', () => {
    const control = fixture.componentInstance.activityForm.controls['activityName'];
    expect(control.getError('required')).toBeTruthy();
  });

  it('should mark activity name as valid if is supplied', () => {
    const control = fixture.componentInstance.activityForm.controls['activityName'];
    control.setValue('a');
    expect(control.getError('required')).toBeFalsy();
  });

  it('should mark duration as invalid if is not supplied', () => {
    const control = fixture.componentInstance.activityForm.controls['duration'];
    expect(control.getError('required')).toBeTruthy();
  });

  it('should mark duration as valid if is supplied', () => {
    const control = fixture.componentInstance.activityForm.controls['duration'];
    control.setValue('a');
    expect(control.getError('required')).toBeFalsy();
  });

  it('should mark duration as invalid if is not a valid duration', () => {
    const control = fixture.componentInstance.activityForm.controls['duration']
    control.setValue('a');
    expect(control.getError('validateDuration')).toBeTruthy();
  });

  it('should mark duration as valid if is a valid duration', () => {
    const control = fixture.componentInstance.activityForm.controls['duration']
    control.setValue('1');
    expect(control.getError('validateDuration')).toBeFalsy();
  });

  it('should call activity service when an activity is added', () => {
    const name = 'a';
    const duration = '1';
    const activityNameControl = fixture.componentInstance.activityForm.controls['activityName'];
    const durationControl = fixture.componentInstance.activityForm.controls['duration'];
    activityNameControl.setValue(name);
    durationControl.setValue(duration);
    const activitiesService = TestBed.get(ActivitiesService);
    spyOn(activitiesService, 'addActivity').and.returnValue(of(''));

    fixture.componentInstance.addActivity(fixture.componentInstance.activityForm.value);

    expect(activitiesService.addActivity).toHaveBeenCalledWith({ name, isImportant: false, duration });
  });

  it('should show toastr message when an activity is added', () => {
    const name = 'a';
    const duration = '1';
    const activityNameControl = fixture.componentInstance.activityForm.controls['activityName'];
    const durationControl = fixture.componentInstance.activityForm.controls['duration'];
    activityNameControl.setValue(name);
    durationControl.setValue(duration);
    const activitiesService = TestBed.get(ActivitiesService);
    spyOn(activitiesService, 'addActivity').and.returnValue(of(''));
    const toastr = TestBed.get(TOASTR_TOKEN);
    spyOn(toastr, 'success');

    fixture.componentInstance.addActivity(fixture.componentInstance.activityForm.value);

    expect(toastr.success).toHaveBeenCalledWith(name, 'Activity Added!');
  });
});
