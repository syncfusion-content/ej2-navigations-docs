var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Ordered', iconCss: 'sf-icon-success' }
  ];

  var iconLabelStepper = new ej.navigations.Stepper({
  steps: iconWithLabel,
  animation: {enable: true, duration: 2000, delay: 500}
  });
  iconLabelStepper.appendTo("#stepper");