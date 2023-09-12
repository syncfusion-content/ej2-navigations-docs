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
    backStageMenu: {
      items: [
        { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: '#homeContent' },
        { id: 'new', text: 'New', iconCss: 'e-icons e-file-new', content: '#newContent' },
        { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open', content: '#openContent' }
      ],
      visible: true,
      backButton: { text: 'Close' }
    }
});
ribbon.appendTo("#ribbon");

//Show and Hide backstage click event handler
document.getElementById('show').addEventListener('click', function () {
  ribbon.ribbonBackstageModule.showBackstage();
});

document.getElementById('hide').addEventListener('click', function() {
  ribbon.ribbonBackstageModule.hideBackstage();
});
