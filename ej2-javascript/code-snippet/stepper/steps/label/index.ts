

import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperLabel: StepModel[] = [
  { label: 'Cart'},
  { label: 'Address'},
  { label: 'Delivery'},
  { label: 'Payment'},
  { label: 'Ordered' }
];

let stepperWithLabel: Stepper = new Stepper({
  steps: stepperLabel
});

stepperWithLabel.appendTo('#stepper');


