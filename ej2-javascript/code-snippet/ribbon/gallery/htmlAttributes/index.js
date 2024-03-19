var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        groupIconCss: 'e-icons e-paste',
        collections: [{
            items: [{
                type: "SplitButton",
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: "Button",
                buttonSettings: {                    
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: "Button",
                buttonSettings: {                    
                    content: 'Format Painter',
                    iconCss: 'e-icons e-format-painter'
                }
            }]
        }]
    },
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: "Gallery",
                gallerySettings: {
                  groups: [{
                    header: 'Styles',
                    items: [
                        {
                            content: 'Normal',
                            htmlAttributes: { title: "Normal" }
                        }, {
                            content: 'No Spacing',
                            htmlAttributes: { title: "No Spacing" }
                        }, {
                            content: 'Heading 1',
                            htmlAttributes: { title: "Heading 1" }
                        }, {
                            content: 'Heading 2',
                            htmlAttributes: { title: "Heading 2" }
                        }, {
                          content: 'Title',
                          htmlAttributes: { title: "Title" }
                        }, {
                          content: 'Subtitle',
                          htmlAttributes: { title: "Subtitle" }
                        }
                      ]
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
