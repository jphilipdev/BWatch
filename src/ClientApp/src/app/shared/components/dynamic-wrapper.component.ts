import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit, Renderer2, ComponentRef } from '@angular/core';
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

  public dynamicComponentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    this.dynamicComponentRef = this.dynamicElement.viewContainerRef.createComponent(componentFactory);
    this.renderer2.addClass(this.dynamicComponentRef.location.nativeElement, this.componentClass);
    (<any>this.dynamicComponentRef.instance).inputData = this.componentInputData;
  }
}
