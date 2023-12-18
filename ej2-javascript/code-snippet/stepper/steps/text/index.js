var iconWithLabel = [
  { text: 'Cart' },
  { text: 'Address' },
  { text: 'Delivery' },
  { text: 'Payment' },
  { text: 'Ordered' }
  ];

  var iconLabelStepper = new ej.navigations.Stepper({
  steps: iconWithLabel
  });
  iconLabelStepper.appendTo("#stepper");