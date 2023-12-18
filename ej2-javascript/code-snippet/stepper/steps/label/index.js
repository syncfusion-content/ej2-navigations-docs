var stepperLabel = [
  { label: 'Cart'},
  { label: 'Address'},
  { label: 'Delivery'},
  { label: 'Payment'},
  { label: 'Ordered' }
  ];

  var stepperWithLabel = new ej.navigations.Stepper({
  steps: stepperLabel
  });
  stepperWithLabel.appendTo("#stepper");