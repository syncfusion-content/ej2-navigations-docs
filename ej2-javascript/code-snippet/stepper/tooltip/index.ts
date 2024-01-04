import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperSteps: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];

let tooltipStepper: Stepper = new Stepper({
  steps: stepperSteps,
  showTooltip: true
});

tooltipStepper.appendTo('#stepper');
