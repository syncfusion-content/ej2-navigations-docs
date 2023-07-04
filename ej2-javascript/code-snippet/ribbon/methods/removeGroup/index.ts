import { Ribbon, RibbonTabModel, RibbonItemType } from '@syncfusion/ej2-ribbon';
import { Button } from '@syncfusion/ej2-buttons';

let tabs: RibbonTabModel[] = [
  {
    header: 'Home',
    groups: [
      {
        header: 'Clipboard',
        collections: [
          {
            id: 'buttonCollection',
            items: [
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: 'Cut',
                  iconCss: 'e-icons e-cut',
                },
              },
            ],
          },
        ],
      },
      {
          header: "ClipBoard",
          id: "insertGroup"
      }
    ],
  }
];
let btn: Button = new Button({ content: "RemoveGroup", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {

    ribbon.removeGroup("insertGroup")
}