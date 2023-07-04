import { Ribbon, RibbonTabModel, RibbonItemType,RibbonItemSize } from '@syncfusion/ej2-ribbon';
import { Button } from '@syncfusion/ej2-buttons';

let tabs: RibbonTabModel[] = [
  {
    header: 'Home',
    groups: [
      {
        header: 'Clipboard',
        id: 'insertGroup',
        collections: [
          {
            id: 'buttonCollection',
            items: [
              {
                type: RibbonItemType.Button,
                disabled: true,
                allowedSizes: RibbonItemSize.Medium,
                buttonSettings: {
                  content: 'Cut',
                  iconCss: 'e-icons e-cut',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
let btn: Button = new Button({ content: "AddItem", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    let newItem = {
        id: "insertItem",
        type: "Button",
        buttonSettings: {
            content: "Edit",
            iconCss: "e-icons e-edit"
        }
      };
    ribbon.addItem("buttonCollection", newItem)
}