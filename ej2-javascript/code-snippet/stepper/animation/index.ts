import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];

let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel,
  animation: {enable: true, duration: 2000, delay: 500}
});

iconLabelStepper.appendTo('#stepper');
