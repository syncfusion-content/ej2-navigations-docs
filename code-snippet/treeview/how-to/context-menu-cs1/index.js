ej.base.enableRipple(true);

/**
 * The node operation in tree view using context menu
 */
 
//define the data source for TreeView
var data = [
    { id: '1', name: 'Local Disk (C:)', hasAttribute:{class:'remove rename'}, hasChild: true, expanded: true, },
    { id: '2', name: 'Program Files', pid: '1', hasChild: true },
    { id: '3', name: 'Windows NT', pid: '2' }, 
    { id: '4', name: 'Windows Mail', pid: '2' },
    { id: '5', name: 'Windows Photo Viewer', pid: '2' },
    { id: '6', name: 'Users', pid: '1', hasChild: true, expanded: true },
    { id: '7', name: 'Smith', pid: '6' },
    { id: '8', name: 'Public', pid: '6' },
    { id: '9', name: 'Admin', pid: '6' },
    { id: '10', name: 'Windows', pid: '1', hasChild: true },
    { id: '11', name: 'Boot', pid: '10' },
    { id: '12', name: 'FileManager', pid: '10' },
    { id: '13', name: 'System32', pid: '10' },
    { id: '14', name: 'Local Disk (D:)', hasAttribute:{class:'remove'} , hasChild: true},
    { id: '15', name: 'Personals', pid: '14', hasChild: true },
    { id: '16', name: 'My photo.png', pid: '15' },
    { id: '17', name: 'Rental document.docx', pid: '15' },
    { id: '18', name: 'Pay slip.pdf', pid: '15' },
    { id: '19', name: 'Projects', pid: '14', hasChild: true },
    { id: '20', name: 'ASP Application', pid: '19' },
    { id: '21', name: 'TypeScript Application', pid: '19' },
    { id: '22', name: 'React Application', pid: '19' },
    { id: '23', name: 'Office', pid: '14', hasChild: true },
    { id: '24', name: 'Work details.docx', pid: '23' },
    { id: '25', name: 'Weekly report.docx', pid: '23' },
    { id: '26', name: 'Wish list.csv', pid: '23' },
    { id: '27', name: 'Local Disk (E:)', hasAttribute:{class:'remove'} , hasChild: true },
    { id: '28', name: 'Pictures', pid: '27', hasChild: true }, 
    { id: '29', name: 'Wind.jpg', pid: '28' }, 
    { id: '30', name: 'Stone.jpg', pid: '28' },
    { id: '31', name: 'Home.jpg', pid: '28' },
    { id: '32', name: 'Documents', pid: '27', hasChild: true },
    { id: '33', name: 'Environment Pollution.docx', pid: '32' },
    { id: '34', name: 'Global Warming.ppt', pid: '32' },
    { id: '35', name: 'Social Network.pdf', pid: '32' },
    { id: '36', name: 'Study Materials', pid: '27', hasChild: true },
    { id: '37', name: 'UI-Guide.pdf', pid: '36' },
    { id: '38', name: 'Tutorials.zip', pid: '36' },
    { id: '39', name: 'TypeScript.7z', pid: '36' } 
];

// Render the TreeView by mapping its fields property with data source properties
var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: data, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild', htmlAttributes:'hasAttribute'},
    nodeClicked: nodeClick
});
treeObj.appendTo('#tree');

function nodeClick(args) {
  if (args.event.which === 3) {
    treeObj.selectedNodes = [args.node.getAttribute('data-uid')]
  }
}

//Render the context menu with target as Treeview
var menuItems = [
    { text: 'Add New Item' },
    { text: 'Rename Item' },
    { text: 'Remove Item' }
];
var menuOptions = {
    target: '#tree',
    items: menuItems,
    select: menuclick,
    beforeOpen: beforeopen
};
var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

var index = 1;
function menuclick(args) {
    var targetNodeId = treeObj.selectedNodes[0];
    if (args.item.text == "Add New Item") {
    var nodeId = "tree_" + index;
    var item = { id: nodeId, name: "New Folder" };
        treeObj.addNodes([item], targetNodeId, null);
        index++;
        data.push(item);
        treeObj.beginEdit(nodeId);
    }
    else if (args.item.text == "Remove Item") {
        treeObj.removeNodes([targetNodeId]);
    }
    else if (args.item.text == "Rename Item") {
        treeObj.beginEdit(targetNodeId);
    }
}

function beforeopen(args) {
  var targetNodeId = treeObj.selectedNodes[0];
  var targetNode = document.querySelector('[data-uid="' + targetNodeId + '"]');
    if (targetNode.classList.contains('remove')) {
        menuObj.enableItems(['Remove Item'], false);
    }
    else {
        menuObj.enableItems(['Remove Item'], true);
    }
    if (targetNode.classList.contains('rename')) {
        menuObj.enableItems(['Rename Item'], false);
    }
    else {
        menuObj.enableItems(['Rename Item'], true);
    }
}

