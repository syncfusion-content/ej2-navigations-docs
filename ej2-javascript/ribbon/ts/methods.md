---
layout: post
title: Methods in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Methods with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Methods

The following methods are available in the Ribbon component.

## addTab

To add an tab dynamically, use the [addTab](https://ej2.syncfusion.com/documentation/api/ribbon/#addtab) method in the ribbon component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     tab              |    Gets the [RibbonTabModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonTabModel/).|
|     targetId (optional)|    Gets the ID of the target tab to add the new tab.|
|     isAfter (optional)|     Defines whether the tab is added before or after the target.|

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/addTab/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/addTab/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/addTab" %}

## addGroup

To add an group dynamically, use the [addGroup](https://ej2.syncfusion.com/documentation/api/ribbon/#addgroup) method in the ribbon component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     tabId            |    Gets the ribbon tab ID.|
|     group            |    Gets the [RibbonGroupModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupModel/).|
|     targetId (optional)|    Gets the ID of the target group to add the new group.|
|     isAfter (optional)|     Defines whether the group is added before or after the target.|

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/addGroup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/addGroup/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/addGroup" %}

## addCollection

To add an collection dynamically, use the [addCollection](https://ej2.syncfusion.com/documentation/api/ribbon/#addcollection) method in the ribbon component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     groupId          |    Gets the ribbon group ID.|
|     collection       |    Gets the [RibbonCollectionModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCollectionModel/).|
|     targetId (optional)|    Gets the ID of the target collection to add the new collection.|
|     isAfter (optional)|     Defines whether the collection is added before or after the target.|

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/addCollection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/addCollection/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/addCollection" %}

## addItem

To add an item dynamically, use the [addItem](https://ej2.syncfusion.com/documentation/api/ribbon/#additem) method in the ribbon component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     collectionId     |    Gets the ribbon collection ID.|
|     item             |    Gets the [RibbonItemModel](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonItemModel/).|
|     targetId (optional)|    Gets the ID of the target item to add the new item.|
|     isAfter (optional)|     Defines whether the item is added before or after the target.|

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/addItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/addItem/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/addItem" %}

## removeTab

The [removeTab](https://ej2.syncfusion.com/documentation/api/ribbon/#removetab) method is used to remove a tab from the ribbon component. This method takes the `tabId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/removeTab/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/removeTab/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/removeTab" %}

## removeGroup

The [removeGroup](https://ej2.syncfusion.com/documentation/api/ribbon/#removegroup) method is used to remove a group of items from the ribbon component. This method takes the `groupId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/removeGroup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/removeGroup/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/removeGroup" %}

## removeCollection

The [removeCollection](https://ej2.syncfusion.com/documentation/api/ribbon/#removecollection) method is used to remove a collection of items from the ribbon component. This method takes the `collectionId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/removeCollection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/removeCollection/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/removeCollection" %}

## removeItem

The [removeItem](https://ej2.syncfusion.com/documentation/api/ribbon/#removeitem) method is used to remove an item from the ribbon component. This method takes the `itemId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/removeItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/removeItem/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/removeItem" %}

## enableItem

The [enableItem](https://ej2.syncfusion.com/documentation/api/ribbon/#enableitem) method in a ribbon component is used to enable a specific item in the ribbon component. This method takes the `itemId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/enableItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/enableItem/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/enableItem" %}

## disableItem

The [disableItem](https://ej2.syncfusion.com/documentation/api/ribbon/#disableitem) method in a ribbon component is used to disable a specific item in the ribbon component. This method takes the `itemId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/disableItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/disableItem/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/disableItem" %}

## refreshLayout

The [refreshLayout](https://ej2.syncfusion.com/documentation/api/ribbon/#refreshlayout) method can be used to update the layout and reflect the changes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/refreshLayout/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/refreshLayout/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/refreshLayout" %}

## selectTab

The [selectTab](https://ej2.syncfusion.com/documentation/api/ribbon/#selecttab) method is used to select a tab from the ribbon component. This method takes the `tabId` as a parameter.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/methods/selectTab/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/methods/selectTab/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/methods/selectTab" %}