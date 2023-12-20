var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment' },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
  ];

  var stepper = new ej.navigations.Stepper({
    steps: iconWithLabel
    });
    stepper.appendTo("#stepper");

  window.updateType = function(args) {
    stepper.stepType = args.value;
  };