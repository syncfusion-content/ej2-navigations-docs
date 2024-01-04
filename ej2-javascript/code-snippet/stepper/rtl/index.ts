import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperSteps: StepModel[] = [
  { text: 'Cart', iconCss: 'sf-icon-cart' },
  { text: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { text: 'Payment', iconCss: 'sf-icon-payment'},
  { text: 'Confirmation', iconCss: 'sf-icon-success' }
];


let stepper: Stepper = new Stepper({
  steps: stepperSteps,
  enableRtl: true
});

stepper.appendTo('#stepper');