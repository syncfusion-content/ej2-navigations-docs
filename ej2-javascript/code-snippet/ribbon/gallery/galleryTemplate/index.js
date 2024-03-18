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
                  template: '#galleryTemplate',
                  popupTemplate: "#galleryTemplate",
                  itemCount: 7,
                  groups: [{
                    header: 'Plain Tables',
                    itemHeight: "79",
                    items: [
                      {
                        cssClass: "plainTables_item_1"
                      },
                      {
                        cssClass: "plainTables_item_2"
                      },
                      {
                        cssClass: "plainTables_item_3"
                      },
                      {
                        cssClass: "plainTables_item_4"
                      },
                      {
                        cssClass: "plainTables_item_5"
                      },
                      {
                        cssClass: "plainTables_item_6"
                      },
                      {
                        cssClass: "plainTables_item_7"
                      }
                    ]
                  }, {
                    header: 'List Tables',
                    itemHeight: "79",
                    items: [
                      {
                        cssClass: "listTables_item_1"
                      },
                      {
                        cssClass: "listTables_item_2"
                      },
                      {
                        cssClass: "listTables_item_3"
                      },
                      {
                        cssClass: "listTables_item_4"
                      },
                      {
                        cssClass: "listTables_item_5"
                      },
                      {
                        cssClass: "listTables_item_6"
                      },
                      {
                        cssClass: "listTables_item_7"
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
