var ribbonTabs = [{
  header: "Home",
  groups: [{
    showLauncherIcon: true,
    header: "Clipboard",
    groupIconCss: "e-icons e-paste",
    id: "clipboardGroup",
    collections: [{
      items: [
        { type: "Button", buttonSettings: { iconCss: "e-icons e-cut", content: "Cut", } },
        { type: "Button", buttonSettings: { iconCss: "e-icons e-copy", content: "Copy" } },
        { type: "Button", buttonSettings: { iconCss: "e-icons e-format-painter", content: "Format Painter" } }
      ]
    }]
  }]
}];
var tableContextualTab = {
  visible: true,
  isSelected: true,
  tabs: [{
    id: "TableDesign",
    header: "Table Design",
    groups: [{
      header: "Table Style",
      collections: [{
        items: [
          { type: "Button", allowedSizes: ej.ribbon.RibbonItemSize.Large, buttonSettings: { iconCss: "e-icons e-edit", content: "Editor" } },
        ]
      }]
    }]
  }]
};

var ribbon = new ej.ribbon.Ribbon({
  tabs: ribbonTabs,
  contextualTabs: [tableContextualTab]
});

ribbon.appendTo("#ribbon");
