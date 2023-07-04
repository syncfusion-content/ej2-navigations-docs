

let tabs  = [
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
let btn = new ej.buttons.Button({ content: "RemoveGroup", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {

    ribbon.removeGroup("insertGroup")
}