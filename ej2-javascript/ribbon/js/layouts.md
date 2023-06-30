---
layout: post
title: Ribbon Layouts in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Layouts with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Layout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in Ribbon control

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#activelayout) property. The Ribbon control supports the following layouts:

## Classic layout

In classic layout, the Ribbon control organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#activelayout) property to [Classic](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon control renders in `Classic` layout.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/classic-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/classic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/classic-cs1" %}

### Defining items size

The Ribbon items can be appeared in three different sizes: Large(large icon with text), Medium(small icon with text) and Small(small icon only) on resizing the ribbon. You can define the allowed size for an item using the [allowedSizes](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/item-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/item-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/item-size-cs1" %}

### Defining items orientation

The [orientation](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#orientation) property in a group allows you to control how the items in a ribbon group are aligned. By default, the orientation is set to `column`, which means the items are arranged vertically.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/orientation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/orientation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/orientation-cs1" %}

> When the orientation is set to `row`, a group can have maximum of three collections in which each collection inside a group can contain any number of items.
When the orientation is set to `column`, a group can have any number of collections, but each collection inside a group can have either a single large-sized item or three medium/small-sized items. If two large-sized items are specified, then it will automatically be converted into two medium/small-sized items.

### Defining group header

You can define the name for each group header using the [header](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/group-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-header-cs1" %}

### Defining group icon

You can make use of the [groupIconCss](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#groupiconcss) property to define the CSS class for the icons to be listed in the group overflow button. The overflow popup will appear on resizing the ribbon.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/group-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-icon-cs1" %}

### Enabling group launcher icon

You can enable or disable the launcher icon for each group using the [showLauncherIcon](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#showlaunchericon) property. By default, the property is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/launcher-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/launcher-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/launcher-icon-cs1" %}

#### Customize launcher icon

You can customize the launcher icon for the groups using the [launcherIconCss](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonModel/#launchericoncss) property which allows you to define a CSS class and apply custom styles to the launcher icon.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/custom-launcher-icon-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/custom-launcher-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/custom-launcher-icon-cs1" %}

### Defining group collapsible state

You can control whether a group can be collapsed or not during resize using the [isCollapsible](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#iscollapsible) property. By default, the property is set to `true`. If you want to prevent the group from being collapsed, you can set this property to `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/collapsible-state-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/collapsible-state-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/collapsible-state-cs1" %}

#### Defining priority order for group collapse or expand

You can define the priority order for each group by setting the [priority](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#priority) property which allows you to specify the order in which groups should be collapsed or expanded on resizing. Higher priority values are fetched first when collapsing, whereas lower priority values are fetched first when expanding.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/priority-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/priority-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/priority-cs1" %}

## Simplified layout

In simplified layout, the Ribbon control organize the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#activelayout) property to [Simplified](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/simplified-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/simplified-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/simplified-cs1" %}

### Enabling group overflow popup

The [enableGroupOverflow](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonGroupModel/#enablegroupoverflow) property defines whether to add a separate popup for the overflow items in the group while resizing. If it is set to `false`, the overflow items will be shown in the common overflow popup present at the right end of the tab content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/group-overflow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/group-overflow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/group-overflow-cs1" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon control expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon control to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#isminimized) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/minimize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/minimize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/minimize-cs1" %}