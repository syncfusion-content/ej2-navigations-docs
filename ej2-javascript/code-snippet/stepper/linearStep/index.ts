

import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Ordered', iconCss: 'sf-icon-success' }
];

let linearStepper: Stepper = new Stepper({
  steps: iconWithLabel,
  linear: true,
  activeStep: 1
});

linearStepper.appendTo('#stepper');

(window as any).updateLinear = (args: any) => {
  linearStepper.linear = (/true/).test(args.value) ? true : false;
  linearStepper.reset();
};
