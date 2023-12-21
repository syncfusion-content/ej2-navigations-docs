var icon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', optional: true },
  { iconCss: 'sf-icon-success' }
  ];

  var optionalStepper = new ej.navigations.Stepper({
  steps: icon
  });
  optionalStepper.appendTo("#stepper");