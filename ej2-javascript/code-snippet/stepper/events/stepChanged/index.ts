import { Stepper, StepModel, StepperChangedEventArgs } from '@syncfusion/ej2-navigations';

let icon: StepModel[] = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: icon,
  stepChanged: (args: StepperChangedEventArgs) => {
    alert("Step Changed from "+args.previousStep + " to " + args.activeStep)
  }
});

stepper.appendTo('#stepper');
