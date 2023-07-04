
let tabs = [
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
                type: "Button",
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
let btn = new ej.buttons.Button({ content: "AddCollection", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
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