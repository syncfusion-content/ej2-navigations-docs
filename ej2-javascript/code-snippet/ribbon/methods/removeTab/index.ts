import { Ribbon, RibbonTabModel, RibbonItemType,RibbonItemSize } from '@syncfusion/ej2-ribbon';
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
  {
      header: "Insert",
      id: "insertTab"
  }
];
let btn: Button = new Button({ content: "RemoveTab", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {

    ribbon.removeTab("insertTab")
}