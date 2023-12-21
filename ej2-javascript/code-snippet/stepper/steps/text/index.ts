import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { text: 'Cart' },
  { text: 'Delivery Address' },
  { text: 'Payment' },
  { text: 'Ordered' }
];

let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel
});

iconLabelStepper.appendTo('#stepper');
