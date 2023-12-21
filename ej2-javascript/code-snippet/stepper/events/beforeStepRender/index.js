var icon = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

var stepper = new ej.navigations.Stepper({
  steps: icon,
  beforeStepRender: (args) =>{
    //Your required action here
  }
});
stepper.appendTo("#stepper");