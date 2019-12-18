import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegistrationBladesWorkflow } from './blades-workflow';

@Component({
  selector: 'registration',
  templateUrl: './registration.html',
  styleUrls: ['./blades/blades.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  @Input() activeBlades: any;
  @Input() currentBlade: any;
  @Input() initiateFlow: any;
  @Input() navigateToBlade: any;

  ngOnInit(): void {
    this.initiateFlow(RegistrationBladesWorkflow);
    setTimeout(() => this.navigateToBlade(this.currentBlade.name, this.currentBlade.actions.ok.blade), 0);
  }
}
