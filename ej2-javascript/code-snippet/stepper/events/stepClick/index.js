var icon = [
  {  iconCss: 'sf-icon-cart' },
  {  iconCss: 'sf-icon-transport' },
  {  iconCss: 'sf-icon-payment'},
  {  iconCss: 'sf-icon-success' }
];

var stepper = new ej.navigations.Stepper({
  steps: icon,
  stepClick: (args) =>{
    //Your required action here
  }
});
stepper.appendTo("#stepper");