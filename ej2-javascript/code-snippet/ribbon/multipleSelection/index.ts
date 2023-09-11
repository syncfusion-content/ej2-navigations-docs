import { Ribbon, RibbonTabModel, RibbonItemType, RibbonGroupButtonSelection, RibbonItemSize } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: RibbonItemType.GroupButton,
                allowedSizes: RibbonItemSize.Large,
                groupButtonSettings: {
                    selection: RibbonGroupButtonSelection.Multiple,
                    items: [{
                        iconCss: 'e-icons e-align-left',
                        content: 'Align Left'
                    },
                    {
                        iconCss: 'e-icons e-align-center',
                        content: 'Align Center',
                        selected: true
                    },
                    {
                        iconCss: 'e-icons e-align-right',
                        content: 'Align Right'
                    },
                    {
                        iconCss: 'e-icons e-justify',
                        selected: true,
                        content: 'Justify'
                    }]
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");