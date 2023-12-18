var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart', isValid: true },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment' },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
  ];

  var iconLabelStepper = new ej.navigations.Stepper({
  steps: iconWithLabel
  });
  iconLabelStepper.appendTo("#stepper");