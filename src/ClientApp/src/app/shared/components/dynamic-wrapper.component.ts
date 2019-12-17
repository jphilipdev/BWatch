import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit, Renderer2 } from '@angular/core';
import { DynamicElementDirective } from '@shared/directives/dynamic-element.directive';

@Component({
  selector: 'dynamic-wrapper',
  template: '<ng-template dynamic-element></ng-template>'
})
export class DynamicWrapperComponent implements OnInit {

  @Input() component: any;
  @Input() componentClass: any;
  @Input() componentInputData: any;

  @ViewChild(DynamicElementDirective, { static: true }) dynamicElement: DynamicElementDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const componentRef = this.dynamicElement.viewContainerRef.createComponent(componentFactory);
    this.renderer2.addClass(componentRef.location.nativeElement, this.componentClass);
    (<any>componentRef.instance).inputData = this.componentInputData;
  }
}
