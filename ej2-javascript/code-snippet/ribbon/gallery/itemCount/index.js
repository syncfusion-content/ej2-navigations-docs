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
                  itemCount: 4,
                  groups: [{
                    header: 'Title and Headings',
                    items: [
                        {
                            content: 'Heading 1',
                        },
                        {
                            content: 'Heading 2',
                        }, {
                            content: 'Heading 3',
                        }, {
                            content: 'Heading 4',
                        }, {
                            content: 'Title',
                        }, {
                            content: 'Total',
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
