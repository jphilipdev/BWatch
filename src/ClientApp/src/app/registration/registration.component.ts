import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { RegistrationBlades, RegistrationBladesWorkflow } from './blades-workflow';

@Component({
  selector: 'registration',
  templateUrl: './registration.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.activeBlades) {
      console.log(changes.activeBlades.currentValue)
    }
  }

  @Input() activeBlades: any;
  @Input() currentBlade: any;
  @Input() bladeSelected: any;

  ngOnInit(): void {
    this.bladeSelected(RegistrationBlades.Name);
  }

  getBlade(blade) {
    return RegistrationBladesWorkflow.filter(p => p.name === blade)[0].component;
  }
}
