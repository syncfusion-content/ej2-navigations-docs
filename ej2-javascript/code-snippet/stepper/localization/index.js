ej.base.L10n.load({
  'fr-BE': {
     'stepper': {
           'optional': "facultatif"
       }
   }
});

var stepperSteps = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery  Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
  ];

  var stepper = new ej.navigations.Stepper({
  steps: stepperSteps,
  locale: 'fr-BE'
  });
  stepper.appendTo("#stepper");