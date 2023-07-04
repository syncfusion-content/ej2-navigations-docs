

let tabs = [
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
                type: "Button",
                disabled: true,
                allowedSizes: "Medium",
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
let btn = new ej.buttons.Button({ content: "RemoveTab", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {

    ribbon.removeTab("insertTab")
}