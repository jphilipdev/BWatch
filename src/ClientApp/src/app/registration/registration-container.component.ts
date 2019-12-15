import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { bladeSelected } from '@redux/actions/registrationActions';
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
    [bladeSelected]="bladeSelected">
  </registration>
  `
})
export class RegistrationContainerComponent {
  private activeBlades$: Observable<any>;
  private currentBlade$: Observable<any>;
  private bladeSelected: any;

  constructor(private store: Store<{ registration: any }>) {
    this.activeBlades$ = this.store.pipe(delay(0), select(activeBlades));
    this.currentBlade$ = this.store.pipe(delay(0), select(currentBlade));
    this.bladeSelected = bindActionCreator(this.store, bladeSelected);
  }
}
