<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Essential JS 2 - Stepper</title>
    <!-- Essential JS 2 Stepper's dependent material theme -->
    <link href="resources/base/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/material.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Stepper's dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>
  </head>
  <body>
    <!--Element to render the Stepper control-->
    <div id="container">
      <nav id="stepper"></nav>
    </div>

    <script>
      var iconWithLabel = [
        { label: 'Cart', iconCss: 'sf-icon-cart' },
        { label: 'Address', iconCss: 'sf-icon-user' },
        { label: 'Delivery', iconCss: 'sf-icon-transport' },
        { label: 'Payment', iconCss: 'sf-icon-payment' },
        { label: 'Ordered', iconCss: 'sf-icon-success' }
        ];

        var iconLabelStepper = new ej.navigations.Stepper({
        steps: iconWithLabel
        });
        iconLabelStepper.appendTo("#stepper");
    </script>
  </body>
</html>