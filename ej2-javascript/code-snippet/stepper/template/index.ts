import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Shipped', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Delivered', iconCss: 'sf-icon-success' }
];

let iconLabelStepper: Stepper = new Stepper({
  steps: iconWithLabel,
  activeStep: 1,
  template: '<span><span class="e-step e-indicator ${step.iconCss}"></span><span class="e-step-label-container e-label-after"><span class="e-label">${step.label}</span></span></span>'
});

iconLabelStepper.appendTo('#stepperTemplate');
