var stepperIcon = [
  { iconCss: 'sf-icon-cart', cssClass: 'stepper-customize' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment'},
  { iconCss: 'sf-icon-success' }
];

  var stepper = new ej.navigations.Stepper({
  steps: stepperIcon
  });
  stepper.appendTo("#stepper");