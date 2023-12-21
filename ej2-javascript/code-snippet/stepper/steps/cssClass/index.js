var stepperIcon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment'},
  { iconCss: 'sf-icon-success' }
];

  var stepper = new ej.navigations.Stepper({
  steps: stepperIcon,
  cssClass: 'stepper-customize'
  });
  stepper.appendTo("#stepper");