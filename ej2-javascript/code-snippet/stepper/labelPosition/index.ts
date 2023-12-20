

import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Ordered', iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: iconWithLabel
});

stepper.appendTo('#stepper');

(window as any).updateLabelPosition = (args: any) => {
  stepper.labelPosition = args.value;
};
