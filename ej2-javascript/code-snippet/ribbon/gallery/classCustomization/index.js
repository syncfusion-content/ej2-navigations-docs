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
                    header: 'Good, Bad and Neutral',
                    items: [{
                            content: 'Normal',
                            cssClass: 'normal'
                        }, {
                            content: 'Bad',
                            cssClass: 'bad'
                        }, {
                            content: 'Good',
                            cssClass: 'good'
                        }, {
                            content: 'Neutral',
                            cssClass: 'neutral'
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
