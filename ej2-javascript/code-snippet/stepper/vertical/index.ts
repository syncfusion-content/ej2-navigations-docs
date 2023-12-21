import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let icon: StepModel[] = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
];

let verticalStepper: Stepper = new Stepper({
  steps: icon,
  orientation: 'vertical'
});

verticalStepper.appendTo('#stepper');