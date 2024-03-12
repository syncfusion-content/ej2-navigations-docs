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
                    header: 'Clipboard',
                    items: [{
                            content: 'Cut',
                            iconCss: 'e-icons e-cut'
                        }, {
                            content: 'Copy',
                            iconCss: 'e-icons e-copy'
                        }, {
                            content: 'Paste',
                            iconCss: 'e-icons e-paste'
                        }, {
                            content: 'Format Painter',
                            iconCss: 'e-icons e-format-painter'
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