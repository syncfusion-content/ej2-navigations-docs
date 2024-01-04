
var stepperSteps = [
  { text: 'Cart', iconCss: 'sf-icon-cart' },
  { text: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { text: 'Payment', iconCss: 'sf-icon-payment'},
  { text: 'Confirmation', iconCss: 'sf-icon-success' }
];

var stepper = new ej.navigations.Stepper({
steps: stepperSteps,
enableRtl: true
});
stepper.appendTo("#stepper");