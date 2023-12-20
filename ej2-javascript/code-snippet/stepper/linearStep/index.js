var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment' },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
  ];

  var linearStepper = new ej.navigations.Stepper({
  steps: iconWithLabel,
  linear: true,
  activeStep: 1
  });
  linearStepper.appendTo("#stepper");

window.updateLinear = function(args) {
  linearStepper.linear = (/true/).test(args.value) ? true : false;
  linearStepper.reset();
};