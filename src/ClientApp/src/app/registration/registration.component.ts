import { Component, Input, OnInit, ChangeDetectionStrategy, ViewChildren, ViewContainerRef, QueryList } from '@angular/core';
import { RegistrationBladesWorkflow } from './blades-workflow';
import { OnChange } from '@shared/decorators/on-change.decorator';
import { DynamicWrapperComponent } from '@shared/components/dynamic-wrapper.component';

@Component({
  selector: 'registration',
  templateUrl: './registration.html',
  styleUrls: ['./blades/blades.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  @Input() activeBlades: any;

  @OnChange(function (value) { this.currentBladeChanged(value); })
  @Input() currentBlade: any;
  @Input() initiateFlow: any;
  @Input() navigateToBlade: any;

  @ViewChildren('dynamicBlade')
  public dynamicBlades: QueryList<any>;

  ngOnInit(): void {
    this.initiateFlow(RegistrationBladesWorkflow);
    //setTimeout(() => this.navigateToBlade(this.currentBlade.name, this.currentBlade.actions.ok.blade), 0);
  }

  currentBladeChanged(currentBlade) {
    this.scrollToBlade(currentBlade);
  }

  scrollToBlade(blade) {
    const bladeComponent = this.dynamicBlades.find(db => db.component === blade.component);
    bladeComponent.dynamicComponentRef.location.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
