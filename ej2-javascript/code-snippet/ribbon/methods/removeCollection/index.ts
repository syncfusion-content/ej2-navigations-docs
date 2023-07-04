import { Ribbon, RibbonTabModel, RibbonItemType } from '@syncfusion/ej2-ribbon';
import { Button } from '@syncfusion/ej2-buttons';

let tabs: RibbonTabModel[] = [
  {
    header: 'Home',
    groups: [
      {
        header: 'Clipboard',
        id: 'clipboard',
        collections: [
          {
            id: 'cutButtonCollection',
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
          {
            id: 'copyButtonCollection',
            items: [
              {
                type: RibbonItemType.Button,
                buttonSettings: {
                  content: 'Copy',
                  iconCss: 'e-icons e-copy',
                },
              },
            ],
          }
        ],
      },
    ],
  }
];
let btn: Button = new Button({ content: "RemoveCollection", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    ribbon.removeCollection("copyButtonCollection")
}
