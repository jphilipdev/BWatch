import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegistrationBlades, RegistrationBladesWorkflow } from './blades-workflow';

@Component({
  selector: 'registration',
  templateUrl: './registration.html',
  styleUrls: ['./blades/blades.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

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
