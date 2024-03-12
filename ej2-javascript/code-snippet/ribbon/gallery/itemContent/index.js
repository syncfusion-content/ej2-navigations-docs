var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Styles",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Number Format',
                    items: [{
                            content: 'Comma'
                        }, {
                            content: 'Comma [0]'
                        }, {
                            content: 'Currency'
                        }, {
                            content: 'Currency [0]'
                        }, {
                            content: `Percent`
                        }]
                  }]
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs
  });
ribbon.appendTo("#ribbon");
