import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { activitiesRoutes } from './activities.routes';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(activitiesRoutes)
  ],
  declarations: [ActivitiesComponent],
  bootstrap: [ActivitiesComponent]
})

export class ActivitiesModule { }
