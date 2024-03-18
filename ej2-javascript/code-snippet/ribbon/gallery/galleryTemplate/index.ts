import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonGallery);

let tabs: RibbonTabModel[] = [
  {
    header: "Home",
    groups: [
      {
        header: "Gallery",
        collections: [
          {
            items: [
              {
                type: RibbonItemType.Gallery,
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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");