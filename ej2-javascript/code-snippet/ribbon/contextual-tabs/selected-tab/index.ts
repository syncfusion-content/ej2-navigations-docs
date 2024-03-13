

import { Ribbon, RibbonTabModel, RibbonItemType, RibbonContextualTab, RibbonContextualTabSettingsModel } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonContextualTab);

let ribbonTabs: RibbonTabModel[] = [{
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

let tableContextualTab: RibbonContextualTabSettingsModel = {
  visible: true,
  isSelected: true,
  tabs: [{
    id: "TableDesign",
    header: "Table Design",
    groups: [{
      header: "Table Style",
      collections: [{
        items: [
          { type: "Button", allowedSizes: RibbonItemType.Large, buttonSettings: { iconCss: "e-icons e-edit", content: "Editor" } },
        ]
      }]
    }]
  }]
};

let ribbon: Ribbon = new Ribbon({
    tabs: ribbonTabs,
    contextualTabs: [tableContextualTab]
});
ribbon.appendTo("#ribbon");


