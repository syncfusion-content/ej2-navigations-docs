var tabs = [{
    header: "Home",
    groups: [{
        header: "Paragraph",
        collections: [
          {
            items: [{
                type: "GroupButton",
                allowedSizes: ej.ribbon.RibbonItemSize.Large,
                groupButtonSettings: {
                    selection: RibbonGroupButtonSelection.Single,
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

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");