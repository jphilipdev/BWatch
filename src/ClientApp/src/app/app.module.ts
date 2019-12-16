import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { BWatchComponent } from './bwatch/bwatch.component';
import { RegistrationContainerComponent } from './registration/registration-container.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationNameComponent } from './registration/blades/registration-name.component';
import { RegistrationSummaryComponent } from './registration/blades/registration-summary.component';

import { ActivitiesService } from './activities/activities.service';

import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './redux/reducers';

import { DynamicWrapperComponent } from '@shared/components/dynamic-wrapper.component';
import { DynamicElementDirective } from '@shared/directives/dynamic-element.directive';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: [
    MainComponent,
    NavComponent,
    BWatchComponent,
    RegistrationContainerComponent,
    RegistrationComponent,
    RegistrationNameComponent,
    RegistrationSummaryComponent,
    DynamicWrapperComponent,
    DynamicElementDirective
  ],
  providers: [ActivitiesService],
  bootstrap: [MainComponent],
  entryComponents: [
    RegistrationNameComponent,
    RegistrationSummaryComponent
  ]
})
export class AppModule { }
