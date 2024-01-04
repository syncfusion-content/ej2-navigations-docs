var stepperSteps = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];

  var stepper = new ej.navigations.Stepper({
    steps: stepperSteps
    });
    stepper.appendTo("#stepper");

  window.updateLabelPosition = function(args) {
    stepper.labelPosition = args.value;
  };