


import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Tab, TabItemModel } from '@syncfusion/ej2-navigations';
import { TreeView, DragAndDropEventArgs } from '@syncfusion/ej2-navigations';

let tabObj: Tab = new Tab({
    heightAdjustMode: 'Auto',
    dragArea: '#container',
    items: [
        {
            header: { 'text': 'India' },
            content: 'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.'
        },
        {
            header: { 'text': 'Australia' },
            content: 'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.'
        },
        {
            header: { 'text': 'USA' },
            content: 'The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.'
        },
        {
            header: { 'text': 'France' },
            content: 'France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.'
        }
    ],
});
tabObj.appendTo('#draggableTab');

let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];
let treeViewObj: TreeView = new TreeView({
    fields: { dataSource: data, id: 'id', text: 'text' },
    allowDragAndDrop: true,
    dragArea: '#container',
    nodeDragStop: onNodeDragStop,
    nodeDragging: onNodeDrag,
    cssClass: 'treeview-external-drop-tab'
});
treeViewObj.appendTo('#draggableTreeview');

function onNodeDragStop(args: DragAndDropEventArgs): void {
    let dropElement: HTMLElement = <HTMLElement>args.target.closest('#draggableTab .e-toolbar-item');
    if (dropElement != null) {
        let tabElement: HTMLElement = document.querySelector('#draggableTab');
        let dropItemIndex: number = [].slice.call(tabElement.querySelectorAll('.e-toolbar-item')).indexOf(dropElement);
        let newTabItem: TabItemModel[] = [{
            header: { 'text': args.draggedNodeData.text.toString() },
            content: args.draggedNodeData.text.toString() + ' Content'
        }];
        tabObj.addTab(newTabItem, dropItemIndex);
        treeViewObj.removeNodes([args.draggedNode]);
        args.cancel = true;
    } else {
        let dropNode: HTMLElement = <HTMLElement>args.target.closest('#draggableTreeview .e-list-item ');
        if (!isNullOrUndefined(dropNode) && args.dropIndicator === 'e-drop-in') {
            args.cancel = true;
        }
    }
}
function onNodeDrag(args: DragAndDropEventArgs): void {
    if (!isNullOrUndefined(args.target.closest('.tab-content'))) {
        args.dropIndicator = 'e-no-drop';
    } else if (!isNullOrUndefined(args.target.closest('#draggableTab .e-tab-header'))) {
        args.dropIndicator = 'e-drop-in';
    }
}



