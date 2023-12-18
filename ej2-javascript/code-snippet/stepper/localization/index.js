ej.base.L10n.load({
  'fr-BE': {
     'stepper': {
           'optional': "facultatif"
       }
   }
});

var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Address', iconCss: 'sf-icon-user' },
  { label: 'Delivery', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
  ];

  var iconLabelStepper = new ej.navigations.Stepper({
  steps: iconWithLabel,
  locale: 'fr-BE'
  });
  iconLabelStepper.appendTo("#stepper");