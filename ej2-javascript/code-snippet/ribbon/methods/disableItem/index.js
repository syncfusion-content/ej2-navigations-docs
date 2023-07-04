

let tabs = [
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
                type: "Button",
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
let btn = new ej.buttons.Button({ content: "DisableItem", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    ribbon.disableItem("cutButton")
}