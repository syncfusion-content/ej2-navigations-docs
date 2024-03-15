var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Clipboard',
                    cssClass: "custom-group",
                    items: [{
                            content: 'Cut'
                        }, {
                            content: 'Copy'
                        }, {
                            content: 'Paste'
                        }, {
                            content: 'Format Painter'
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
