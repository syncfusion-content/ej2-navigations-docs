

import { Ribbon, RibbonItemSize, RibbonItemType, RibbonTabModel, RibbonGroupButtonSelection, RibbonKeyTip } from '@syncfusion/ej2-ribbon';

Ribbon.Inject(RibbonKeyTip);

let fontStyle: string[] = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Courier New', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];
let fontSize: string[] = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
let tabs: RibbonTabModel[] = [{
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
                type: RibbonItemType.SplitButton,
                allowedSizes: RibbonItemSize.Large,
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
                type: RibbonItemType.Button,
                keyTip: 'CU',
                buttonSettings: {
                    content: 'cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: RibbonItemType.Button,
                keyTip: 'CO',
                buttonSettings: {
                    content: 'copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: RibbonItemType.GroupButton,
                keyTip: 'GB',
                groupButtonSettings: {
                    selection: RibbonGroupButtonSelection.Single,
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
                type: RibbonItemType.ComboBox,
                keyTip: 'O',
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 2,
                    allowFiltering: true,
                    width: '150px'
                }
            }, {
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontSize,
                    index: 4,
                    width: '65px'
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                keyTip: 'B',
                buttonSettings: {
                    content: 'Bold',
                    iconCss: 'e-icons e-bold'
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                keyTip: 'I',
                buttonSettings: {
                    content: 'Italic',
                    iconCss: 'e-icons e-italic'
                }
            }, {
                type: RibbonItemType.Button,
                allowedSizes: RibbonItemSize.Small,
                keyTip: 'U',
                buttonSettings: {
                    content: 'UnderLine',
                    iconCss: 'e-icons e-underline'
                }
            }, {
                type: RibbonItemType.ColorPicker,
                keyTip: 'CP',
                colorPickerSettings: {
                    value: '#123456'
                }
            }
            ]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs,
    enableKeyTips: true
});
ribbon.appendTo("#ribbon");

ribbon.ribbonKeyTipModule.showKeyTips('H');
