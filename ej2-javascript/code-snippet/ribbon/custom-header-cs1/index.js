var tabs = [
  {
    header: "Home",
    groups: [
      {
        header: "Clipboard",
        collections: [
          {
            items: [
              {
                type: "Button",
                buttonSettings: {
                  content: "Paste",
                  iconCss: "e-icons e-paste",
                }
              },
            ],
          },
          {
            items: [
              {
                type: "Button",
                buttonSettings: {
                  content: "Cut",
                  iconCss: "e-icons e-cut",
                }
              },
              {
                type: "Button",
                buttonSettings: {
                  content: "Copy",
                  iconCss: "e-icons e-copy",
                }
              },
            ],
          }
        ]
      }
    ]
  }
];

var ribbon = new ej.ribbon.Ribbon({
    tabs: tabs,
    fileMenu: {
        text: "App",
        menuItems: [{ text: "New", iconCss: "e-icons e-file-new", id: "new" }],
        visible: true
    }
});
ribbon.appendTo("#ribbon");

