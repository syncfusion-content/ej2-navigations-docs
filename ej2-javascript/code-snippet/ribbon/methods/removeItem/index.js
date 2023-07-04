
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
              },{
                type: "Button",
                id: "copyButton",
                buttonSettings: {
                  content: 'Copy',
                  iconCss: 'e-icons e-copy',
                },
              }
            ],
          },
        ],
      },
    ],
  }
];
let btn = new ej.buttons.Button({ content: "RemoveItem", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    ribbon.removeItem("copyButton")
}