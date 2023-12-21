import { Stepper, StepModel, StepperChangingEventArgs } from '@syncfusion/ej2-navigations';

let icon: StepModel[] = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: icon,
  stepChanging: (args: StepperChangingEventArgs) => {
    alert("Step changing from "+args.previousStep + " to " + args.activeStep)
  }
});

stepper.appendTo('#stepper');
