var iconWithLabel = [
  { iconCss: 'sf-icon-cart', isValid: true },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
  ];

  var iconLabelStepper = new ej.navigations.Stepper({
  steps: iconWithLabel
  });
  iconLabelStepper.appendTo("#stepper");