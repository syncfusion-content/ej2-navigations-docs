import { Ribbon, RibbonTabModel, RibbonItemType } from '@syncfusion/ej2-ribbon';
import { Button } from '@syncfusion/ej2-buttons';

let tabs: RibbonTabModel[] = [
  {
    header: 'Home',
    id: 'newTab',
    groups: [
      {
        header: 'Clipboard',
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
let btn: Button = new Button({ content: "AddGroup", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});

ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    let newGroup = {
        header: "newGroup",
        id: "insertGroup"
    };
    ribbon.addGroup("newTab", newGroup)
}