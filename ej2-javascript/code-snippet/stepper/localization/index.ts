

import { Stepper, StepModel } from '@syncfusion/ej2-navigations';
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'fr-BE': {
     'stepper': {
           'optional': "facultatif"
       }
   }
});


let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
];


let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel,
  locale: 'fr-BE'
});

iconLabelStepper.appendTo('#stepper');


