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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");