import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let icon: StepModel[] = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment'},
  { iconCss: 'sf-icon-success' }
];

let horizontalStepper: Stepper = new Stepper({
  steps: icon,
  orientation: 'horizontal'
});

horizontalStepper.appendTo('#stepper');
