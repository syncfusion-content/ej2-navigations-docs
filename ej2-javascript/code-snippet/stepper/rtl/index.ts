

import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
];


let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel,
  enableRtl: true
});

iconLabelStepper.appendTo('#stepper');