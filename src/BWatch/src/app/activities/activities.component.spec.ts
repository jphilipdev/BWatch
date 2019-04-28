import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesResolver } from './activities.resolver';
import { ActivitiesService } from './activities.service';
import { SharedModule } from '../shared/shared.module';
import { TOASTR_TOKEN } from '../shared/services/toastr.service';

describe('ActivitesComponent', () => {
  let fixture: ComponentFixture<ActivitiesComponent>;
  let component: ActivitiesComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    let route = { snapshot: { data: { }} };
    let activitesResolver = { };
    let activitesService = { };
    let toastr = { };

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

  it('should render and expand-panel for each activity', () => {
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.data =  { activities: [{ name: 'one'}, { name: 'two'}] };
    fixture = TestBed.createComponent(ActivitiesComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('expand-panel')).length).toBe(2);
  });
});
