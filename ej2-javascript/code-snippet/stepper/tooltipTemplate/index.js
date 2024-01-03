var stepperSteps = [
  { text: "Review your cart items", label: 'Cart', iconCss: 'sf-icon-cart' },
  { text: "Enter your delivery address", label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { text: "Complete your purchase securely", label: 'Payment', iconCss: 'sf-icon-payment'},
  { text: "Verify your order details", label: 'Confirmation', iconCss: 'sf-icon-success' }
];

var stepperTooltip = new ej.navigations.Stepper({
  steps: stepperSteps,
  showTooltip: true,
  tooltipTemplate: '<span class="template-content"><span class="stepper-icon ${value.iconCss}"></span><span class="step-label">${value.text}</span></span>'
});
stepperTooltip.appendTo("#stepper");