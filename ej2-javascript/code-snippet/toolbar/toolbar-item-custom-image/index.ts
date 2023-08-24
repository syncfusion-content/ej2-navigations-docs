import { Toolbar } from "@syncfusion/ej2-navigations";

let ele: string =
  '<div class= "e-folder"><div class = "e-folder-name">Inbox(33)</div>';
ele = ele + '<div class ="e-mail-id">user@example.com</div></div> ';

let toolbarObj: Toolbar = new Toolbar({
  items: [
    {
      prefixIcon: 'e-tbar-menu-icon tb-icons',
      tooltipText: 'Author',
    },
    {
      template: ele,
      align: 'Center',
    },
    {
      prefixIcon: 'e-tbar-search-icon tb-icons',
      tooltipText: 'Search',
      align: 'Right',
    },
    {
      prefixIcon: 'e-tbar-settings-icon tb-icons',
      tooltipText: 'Popup',
      align: 'Right',
    },
  ],
});
toolbarObj.appendTo('#toolbar_align');
