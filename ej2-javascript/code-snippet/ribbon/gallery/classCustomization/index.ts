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

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");