

import { Ribbon, RibbonItemType, RibbonTabModel } from '@syncfusion/ej2-ribbon';

let fontSize: string[] = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
let fontStyle: string[] = ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia', 'Impact', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Symbol', 'Times New Roman', 'Verdana', 'Windings'
];

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: 'Clipboard',
        groupIconCss: 'e-icons e-paste',
        priority: 2,
        collections: [{
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    iconCss: 'e-icons e-paste',
                    items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }],
                    content: 'Paste'
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Cut',
                    iconCss: 'e-icons e-cut'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Copy',
                    iconCss: 'e-icons e-copy'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Format Painter',
                    iconCss: 'e-icons e-format-painter'
                }
            }]
        }]
    }, {
        header: 'Font',
        groupIconCss: 'e-icons e-bold',
        priority: 0,
        collections: [{
            items: [{
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3
                }
            }, {
                type: RibbonItemType.ComboBox,
                comboBoxSettings: {
                    dataSource: fontSize,
                    index: 3
                }
            }]
        }, {
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Bold',
                    iconCss: 'e-icons e-bold'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Italic',
                    iconCss: 'e-icons e-italic'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Underline',
                    iconCss: 'e-icons e-underline'
                }
            }]
        }]
    }, {
        header: 'Editing',
        groupIconCss: 'e-icons e-edit',
        priority: 1,
        collections: [{
            items: [{
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    iconCss: 'e-icons e-search',
                    items: [
                        { text: 'Find', iconCss: 'e-icons e-search' },
                        { text: 'Advanced find', iconCss: 'e-icons e-search' },
                        { text: 'Go to', iconCss: 'e-icons e-arrow-right' }
                    ],
                    content: 'Find'
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: 'Replace',
                    iconCss: 'e-icons e-replace'
                }
            }, {
                type: RibbonItemType.SplitButton,
                splitButtonSettings: {
                    iconCss: 'e-icons e-mouse-pointer',
                    items: [
                        { text: 'Select All' },
                        { text: 'Select Objects' }
                    ],
                    content: 'Select'
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({
    tabs: tabs
});
ribbon.appendTo("#ribbon");


