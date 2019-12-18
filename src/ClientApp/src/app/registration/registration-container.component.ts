import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { initiateFlow, navigateToBlade } from '@redux/actions/registrationActions';
import { activeBlades, currentBlade } from '@redux/selectors/registrationSelectors';
import { bindActionCreator } from '@redux/utils';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'registration-container',
  template: `
  <registration
    [activeBlades]="activeBlades$ | async"
    [currentBlade]="currentBlade$ | async"
    [initiateFlow]="initiateFlow"
    [navigateToBlade]="navigateToBlade">
  </registration>
  `
})
export class RegistrationContainerComponent {
  private activeBlades$: Observable<any>;
  private currentBlade$: Observable<any>;
  private initiateFlow: any;
  private navigateToBlade: any;

  constructor(private store: Store<{ registration: any }>) {
    this.activeBlades$ = this.store.pipe(delay(0), select(activeBlades));
    this.currentBlade$ = this.store.pipe(delay(0), select(currentBlade));
    this.initiateFlow = bindActionCreator(this.store, initiateFlow);
    this.navigateToBlade = bindActionCreator(this.store, navigateToBlade);
  }
}
