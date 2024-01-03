import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperIcon: StepModel[] = [
  { iconCss: 'sf-icon-cart', cssClass: 'stepper-customize' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment'},
  { iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: stepperIcon
});

stepper.appendTo('#stepper');