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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");