
let tabs = [
  {
    header: 'Home',
    groups: [
      {
        header: 'Clipboard',
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
let btn = new ej.buttons.Button({ content: "AddTab", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});

ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    let newTab = {
        header: "newTab"
    };
    ribbon.addTab(newTab);
}