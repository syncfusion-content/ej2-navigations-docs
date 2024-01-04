import { Stepper, StepModel } from '@syncfusion/ej2-navigations';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'fr-BE': {
     'stepper': {
           'optional': "facultatif"
       }
   }
});


let stepperSteps: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];


let stepper: Stepper = new Stepper({
  steps: stepperSteps,
  locale: 'fr-BE'
});

stepper.appendTo('#stepper');
