

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
                type:"Button",
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
                type:"Button",
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
let btn = new ej.buttons.Button({ content: "RemoveCollection", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    ribbon.removeCollection("copyButtonCollection")
}
