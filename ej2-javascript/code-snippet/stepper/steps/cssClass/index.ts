import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperIcon: StepModel[] = [
  { iconCss: 'sf-icon-cart', cssClass: 'step-customize' },
  { iconCss: 'sf-icon-transport', cssClass: 'step-customize' },
  { iconCss: 'sf-icon-payment', cssClass: 'step-customize' },
  { iconCss: 'sf-icon-success', cssClass: 'step-customize' }
];

let stepper: Stepper = new Stepper({
  steps: stepperIcon
});

stepper.appendTo('#stepper');
