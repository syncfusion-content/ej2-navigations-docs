---
layout: post
title: Style in ##Platform_Name## Toolbar control | Syncfusion
description: Learn here all about Style in Syncfusion ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style in ##Platform_Name## Toolbar control

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on user preference.

## Customizing Toolbar

Use the following CSS to customize the Toolbar.

```css

.e-toolbar {
    border: 5px solid rgb(173, 255, 47);
}

```

## Customizing the Toolbar items

Use the following CSS to customize the items of Toolbar.

```css

 .e-toolbar .e-toolbar-item {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

Use the following CSS to customize the button in the items of Toolbar.

```css

.e-toolbar .e-tbar-btn {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

## Customizing Toolbar's item icon

Use the following CSS to customize the item icon of Toolbar control.

```css

.e-toolbar .e-tbar-btn .e-icons {
    background: #185655;
    color: #d7f9d4;
}

```

## Customizing the hover state of Toolbar control

Use the following CSS to customize the toolbar item when hovering.

```css

.e-toolbar .e-tbar-btn:hover {
    background: #c0e3a1;
    border: 1px solid green;
}

```

## Customizing selected item of Toolbar control

Use the following CSS to customize the selected toolbar item.

```css

.e-toolbar .e-tbar-btn:focus {
    background: #add8e6;
    border: 1px solid #5a70cc;
}

```

## Custom image in toolbar item

You have the capability to incorporate a personalized image into the Toolbar as a toolbar item by utilizing the [`prefixIcon`](https://ej2.syncfusion.com/documentation/api/toolbar/item/#prefixicon) property. In the following example, we've exhibited an instance where a custom image is showcased as the left toolbar item. This is illustrated through the code snippets provided below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-item-custom-image/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-item-custom-image/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/toolbar/toolbar-item-custom-image/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-item-custom-image" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/toolbar-item-custom-image/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-item-custom-image/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/toolbar/toolbar-item-custom-image/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-item-custom-image" %}
{% endif %}