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
                    items: [{
                            content: 'Cut',
                            iconCss: 'e-icons e-cut'
                        }, {
                            content: 'Copy',
                            iconCss: 'e-icons e-copy'
                        }, {
                            content: 'Paste',
                            iconCss: 'e-icons e-paste'
                        }, {
                            content: 'Format Painter',
                            iconCss: 'e-icons e-format-painter'
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
