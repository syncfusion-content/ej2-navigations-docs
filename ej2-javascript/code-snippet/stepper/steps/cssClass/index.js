var stepperIcon = [
  { iconCss: 'sf-icon-cart', cssClass: 'step-customize' },
  { iconCss: 'sf-icon-transport', cssClass: 'step-customize' },
  { iconCss: 'sf-icon-payment', cssClass: 'step-customize' },
  { iconCss: 'sf-icon-success', cssClass: 'step-customize' }
];

  var stepper = new ej.navigations.Stepper({
  steps: stepperIcon
  });
  stepper.appendTo("#stepper");