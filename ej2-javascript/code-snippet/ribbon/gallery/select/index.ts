import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGallery, GallerySelectEventArgs } from "@syncfusion/ej2-ribbon";

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
                    header: 'Clipboard',
                    items: [{
                            content: 'Cut'
                        }, {
                            content: 'Copy'
                        }, {
                            content: 'Paste'
                        }, {
                            content: 'Format Painter'
                        }]
                  }],
                  select: (args: GallerySelectEventArgs) => {
                    // Your required action here
                  }
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