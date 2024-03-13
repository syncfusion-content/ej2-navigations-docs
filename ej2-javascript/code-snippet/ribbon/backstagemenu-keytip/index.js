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
      keyTip: 'F',
      items: [
        { id: 'home', keyTip: 'H', text: 'Home', iconCss: 'e-icons e-home', content: '#homeContent' },
        { id: 'new', keyTip: 'N', text: 'New', iconCss: 'e-icons e-file-new', content: '#newContent' },
        { id: 'open', keyTip: 'O', text: 'Open', iconCss: 'e-icons e-folder-open', content: '#openContent' }
      ],
      visible: true,
      backButton: { text: 'Close' }
    },
    enableKeyTips: true
});
ribbon.appendTo("#ribbon");
ribbon.ribbonKeyTipModule.showKeyTips('F');