import { Ribbon, RibbonTabModel, RibbonItemType,RibbonLayout } from '@syncfusion/ej2-ribbon';
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
let btn: Button = new Button({ content: "RefreshLayout", isPrimary: true });

btn.appendTo('#button');

let ribbon: Ribbon = new Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    ribbon.activeLayout = RibbonLayout.Simplified,
    ribbon.refreshLayout()
}