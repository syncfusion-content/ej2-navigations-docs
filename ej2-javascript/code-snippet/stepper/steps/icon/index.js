var icon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-user' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
  ];

  var stepperWithIcon = new ej.navigations.Stepper({
  steps: icon
  });
  stepperWithIcon.appendTo("#stepper");