

let tabs = [
  {
    header: 'Home',
    groups: [
      {
        header: 'Clipboard',
        id: 'insertGroup',
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
];
let btn = new ej.buttons.Button({ content: "AddItem", isPrimary: true });

btn.appendTo('#button');

let ribbon = new ej.ribbon.Ribbon({
  tabs: tabs,
});
ribbon.appendTo('#ribbon');

btn.element.onclick = () => {
    let newItem = {
        id: "insertItem",
        type: "Button",
        buttonSettings: {
            content: "Edit",
            iconCss: "e-icons e-edit"
        }
      };
    ribbon.addItem("buttonCollection", newItem)
}