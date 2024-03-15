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
                  groups: [{
                    itemWidth: '100',
                    itemHeight: '30',
                    header: 'Title and Headings',
                    items: [
                        {
                            content: 'Heading 1',
                            cssClass: 'heading_1'
                        },
                        {
                            content: 'Heading 2',
                            cssClass: 'heading_2'
                        }, {
                            content: 'Heading 3',
                            cssClass: 'heading_3'
                        }, {
                            content: 'Heading 4',
                            cssClass: 'heading_4'
                        }, {
                            content: 'Title',
                            cssClass: 'title'
                        }, {
                            content: 'Total',
                            cssClass: 'total'
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