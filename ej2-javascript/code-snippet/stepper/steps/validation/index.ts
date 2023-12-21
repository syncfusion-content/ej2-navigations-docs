import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { iconCss: 'sf-icon-cart', isValid: true },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
];

let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel
});

iconLabelStepper.appendTo('#stepper');
