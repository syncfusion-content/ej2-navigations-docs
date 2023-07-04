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
                disabled: true,
                id: "cutButton",
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
  }
];
let btn: Button = new Button({ content: "EnableItem", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    ribbon.enableItem("cutButton")
}