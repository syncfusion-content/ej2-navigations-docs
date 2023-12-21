import { Stepper, StepModel, StepperRenderingEventArgs } from '@syncfusion/ej2-navigations';

let icon: StepModel[] = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: icon,
  beforeStepRender: (args: StepperRenderingEventArgs) => {
    //Your required action here
  }
});

stepper.appendTo('#stepper');
