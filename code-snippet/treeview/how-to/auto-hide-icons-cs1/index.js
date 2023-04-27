 /**
 * TreeView Auto hide/show expand/collapse icons
 */

// Hierarchical data source for TreeView component
 var countries = [
    { id: 1, name: 'India', hasChild: true },
    { id: 2, pid: 1, name: 'Assam' },
    { id: 3, pid: 1, name: 'Bihar' },
    { id: 4, pid: 1, name: 'Tamil Nadu' },
    { id: 6, pid: 1, name: 'Punjab' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'France', hasChild: true },
    { id: 12, pid: 11, name: 'Pays de la Loire' },
    { id: 13, pid: 11, name: 'Aquitaine' },
    { id: 14, pid: 11, name: 'Brittany' },
    { id: 15, pid: 11, name: 'Lorraine' },
    { id: 16, name: 'Australia', hasChild: true },
    { id: 17, pid: 16, name: 'New South Wales' },
    { id: 18, pid: 16, name: 'Victoria' },
    { id: 19, pid: 16, name: 'South Australia' },
    { id: 20, pid: 16, name: 'Western Australia' },
    { id: 21, name: 'China', hasChild: true },
    { id: 22, pid: 21, name: 'Guangzhou' },
    { id: 23, pid: 21, name: 'Shanghai' },
    { id: 24, pid: 21, name: 'Beijing' },
    { id: 25, pid: 21, name: 'Shantou' }
    
];

// Renders treeview
var tree1 = new ej.navigations.TreeView({
    fields: { dataSource: countries, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' },
    created: onCreate
});
tree1.appendTo('#tree');

function onCreate(){
  var treeElement = document.getElementById("tree");
  var collapse = treeElement.querySelectorAll('.e-icons.e-icon-collapsible');
  var expand = treeElement.querySelectorAll('.e-icons.e-icon-expandable');
  hideIcon(expand, collapse);
  document.getElementById("tree").addEventListener('mouseenter',function(e) {
    showIcon(expand, collapse);
  })
  document.getElementById("tree").addEventListener('mouseleave',function(e) { 
   hideIcon(expand, collapse);
  })
}

// hides expand/collapse icon on hovering the mouse
function hideIcon(expand, collapse) {
for(var i = 0; i < collapse.length; i++ ){
    collapse[i].setAttribute('style','visibility: hidden');
  }
  for(var j = 0; j < expand.length; j++ ){
    expand[j].setAttribute('style','visibility: hidden');
  }
}

// shows expand/collapse icon while leaving the mouse
function showIcon(expand, collapse) {
for(var i = 0; i < collapse.length; i++ ){
    collapse[i].setAttribute('style',"visibility", "");
  }
  for(var j= 0; j < expand.length; j++ ){
    expand[j].setAttribute('style',"visibility", "");
  }
}

