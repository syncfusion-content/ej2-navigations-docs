---
layout: post
title: Ribbon Resizing in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Resizing with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Layout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Resizing

When resizing the Ribbon, you have control over how the items behave in terms of their size preservation.

## Defining items allowed size

You can utilize the [allowedSizes](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property to maintain a specific size for an item regardless of resizing. By configuring `allowedSizes` for an item, you restrict its size to the specified option, preserving its size even when the Ribbon is being resized.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/allowed-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/allowed-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/allowed-size-cs1" %}

## Defining items active size

You can make use of the [activeSize](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#activesize) read-only property to retrieve the size at which the item is currently being displayed.