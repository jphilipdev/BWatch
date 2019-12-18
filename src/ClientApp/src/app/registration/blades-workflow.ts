import Immutable from 'seamless-immutable';
import { RegistrationNameComponent } from './blades/registration-name.component';
import { RegistrationSummaryComponent } from './blades/registration-summary.component';

export const RegistrationBlades = new Immutable({
  Name: 'Name',
  Summary: 'Summary'
});

export const RegistrationBladesWorkflow = [
  {
    name: RegistrationBlades.Name,
    component: RegistrationNameComponent,
    actions: {
      ok: { blade: RegistrationBlades.Summary }
    },
  },
  {
    name: RegistrationBlades.Summary,
    component: RegistrationSummaryComponent,
    actions: null
  }
];
