var fontStyle = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];
var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
var tabs = [{
    header: "Home",
    keyTip: 'H',
    groups: [{
        header: "Clipboard",
        groupIconCss: 'e-icons e-paste',
        showLauncherIcon:true,
        launcherIconKeyTip: 'V1',
        keyTip: 'CD',
        collections: [{
            items: [{
                type: 'SplitButton',
                allowedSizes: ej.ribbon.RibbonItemSize.Large,
                keyTip: 'PA',
                ribbonTooltipSettings: {
                    title: 'Paste',
                    cssClass:'custom-tooltip',
                    iconCss: 'e-icons e-paste',
                    content: 'Paste content here.</br> Add content on the clipboard to your document.'
                },
                splitButtonSettings: {
                    content: 'Paste',
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }]
                }
            }]
        }, {
            items: [{
                type: 'Button',
                keyTip: 'CU',
                buttonSettings: {
                    content: 'cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: 'Button',
                keyTip: 'CO',
                buttonSettings: {
                    content: 'copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: 'GroupButton',
                keyTip: 'GB',
                groupButtonSettings: {
                    selection: ej.ribbon.RibbonGroupButtonSelection.Single,
                    items: [{
                        iconCss: 'e-icons e-table',
                        content: 'table',
                        keyTip: 'T1',
                        selected: true
                    },
                    {
                        iconCss: 'e-icons e-image',
                        content: 'picture',
                        keyTip: 'P1'
                    },
                    {
                        iconCss: 'e-icons e-menu',
                        content: 'menu',
                        keyTip: 'M1'
                    }]
                }
            }]
        },]
    }, {
        header: "Font",
        orientation: 'Row',
        groupIconCss: 'e-icons e-bold',
        enableGroupOverflow: true,
        showLauncherIcon:true,
        keyTip: 'FB',
        launcherIconKeyTip: 'V2',
        cssClass: 'font-group',
        collections: [{
            items: [{
                type: 'ComboBox',
                keyTip: 'O',
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 2,
                    allowFiltering: true,
                    width: '150px'
                }
            }, {
                type: 'ComboBox',
                comboBoxSettings: {
                    dataSource: fontSize,
                    index: 4,
                    width: '65px'
                }
            }]
        }, {
            items: [{
                type: 'Button',
                allowedSizes: ej.ribbon.RibbonItemSize.Small,
                keyTip: 'B',
                buttonSettings: {
                    content: 'Bold',
                    iconCss: 'e-icons e-bold'
                }
            }, {
                type: 'Button',
                allowedSizes: ej.ribbon.RibbonItemSize.Small,
                keyTip: 'I',
                buttonSettings: {
                    content: 'Italic',
                    iconCss: 'e-icons e-italic'
                }
            }, {
                type: 'Button',
                allowedSizes: ej.ribbon.RibbonItemSize.Small,
                keyTip: 'U',
                buttonSettings: {
                    content: 'UnderLine',
                    iconCss: 'e-icons e-underline'
                }
            }, {
                type: 'ColorPicker',
                keyTip: 'CP',
                colorPickerSettings: {
                    value: '#123456'
                }
            }
            ]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
  enableKeyTips: true
});
ribbon.appendTo("#ribbon");

ribbon.ribbonKeyTipModule.showKeyTips('H');