import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];

let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel
});

iconLabelStepper.appendTo('#stepper');
