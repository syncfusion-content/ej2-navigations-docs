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
                    header: 'Title and Headings',
                    items: [{
                            content: 'Heading 1',
                            htmlAttributes: { title: "Heading 1" }
                        }, {
                            content: 'Heading 2',
                            htmlAttributes: { title: "Heading 2" }
                        }, {
                            content: 'Heading 3',
                            htmlAttributes: { title: "Heading 3" }
                        }, {
                            content: 'Heading 4',
                            htmlAttributes: { title: "Heading 4" }
                        }, {
                            content: `Title`,
                            htmlAttributes: { title: "Title" }
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
