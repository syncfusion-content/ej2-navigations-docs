var icon = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

var stepper = new ej.navigations.Stepper({
  steps: icon,
  stepChanged: (args) =>{
    alert("Step changed from "+args.previousStep + " to " + args.activeStep)
  }
});
stepper.appendTo("#stepper");