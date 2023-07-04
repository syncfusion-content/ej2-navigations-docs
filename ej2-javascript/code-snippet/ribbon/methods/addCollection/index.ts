import { Ribbon, RibbonTabModel, RibbonItemType } from '@syncfusion/ej2-ribbon';
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
            items: [
              {
                type: RibbonItemType.Button,
                disabled: true,
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
let btn: Button = new Button({ content: "AddCollection", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    let newCollection = {
        id: "insertCollection",
        items: [
            {
                type: "Button",
                buttonSettings: {
                    content: "Edit",
                    iconCss: "e-icons e-edit"
                }
            }
        ]
      };
    ribbon.addCollection("insertGroup", newCollection)
}