import { Stepper, StepModel, StepperClickEventArgs } from '@syncfusion/ej2-navigations';

let icon: StepModel[] = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: icon,
  stepClick: (args: StepperClickEventArgs) => {
    //Your required action here
  }
});

stepper.appendTo('#stepper');
