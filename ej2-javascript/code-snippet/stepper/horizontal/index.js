var icon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment'},
  { iconCss: 'sf-icon-success' }
  ];

  var horizontalStepper = new ej.navigations.Stepper({
  steps: icon,
  orientation: 'horizontal'
  });
  horizontalStepper.appendTo("#stepper");