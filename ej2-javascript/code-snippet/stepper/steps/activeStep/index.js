var icon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
];

var stepperWithIcon = new ej.navigations.Stepper({
  steps: icon,
  activeStep: 1
});
  stepperWithIcon.appendTo("#stepper");