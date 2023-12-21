var iconWithLabel = [
  { text: 'Cart' },
  { text: 'Delivery Address' },
  { text: 'Payment' },
  { text: 'Confirmation' }
  ];

  var iconLabelStepper = new ej.navigations.Stepper({
  steps: iconWithLabel
  });
  iconLabelStepper.appendTo("#stepper");