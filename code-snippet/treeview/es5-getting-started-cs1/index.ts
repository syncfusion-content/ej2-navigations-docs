

<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2 for TreeView</title>
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 TreeView's global script -->
    <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>

</head>
<body>
    <!--Element which will render as TreeView-->
    <div id='container'>
        <div id='treeparent' style="display: block;border: 1px solid #dddddd;border-radius: 3px;overflow: auto;max-width: 350px;max-height: 350px;margin: auto;">
            <div id="tree"></div>
        </div>
    </div>

<script>
ej.base.enableRipple(true);

//define the array of JSON
var data = [
    {
        nodeId: '01', nodeText: 'Music',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
    },
    {
        nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
    },
    {
        nodeId: '03', nodeText: 'Documents',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
    },
];
//Initialize TreeView component
var treeViewInstance = new ej.navigations.TreeView({
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' }
});

//Render initialized TreeView
treeViewInstance.appendTo("#tree");
</script>

</body>

</html>


