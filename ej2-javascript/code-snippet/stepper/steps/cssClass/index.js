var stepperIcon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', cssClass: 'custom-step', optional: true},
  { iconCss: 'sf-icon-success' }
];

  var stepper = new ej.navigations.Stepper({
  steps: stepperIcon
  });
  stepper.appendTo("#stepper");