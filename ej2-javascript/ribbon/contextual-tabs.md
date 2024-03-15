---
layout: post
title: Ribbon Contextual Tabs in  ##Platform_Name## Menu control | Syncfusion
description: Checkout and learn about Ribbon Contextual Tabs with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon contextual tabs

Contextual tabs are similar to Ribbon tabs that show up when you're working on something specific, such as an image or a table. Just select an image, table, or any other element, and the relevant tabs with configured options will appear at the Tab panel, allowing you to work faster and more efficiently.

## Visible tabs

You can utilize the [visible](../api/ribbon#contextualTabs#visible) property within each tab to control the visibility of the contextual tab and its associated content.

## Adding contextual tabs

To add contextual tabs in Syncfusion Ribbon, you can utilize the [contextualTabs](../api/ribbon#contextualTabs) property. This property accepts an array of Ribbon tabs where you can add multiple tabs as per needs.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/add-contextual-tabs" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/add-contextual-tabs/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/add-contextual-tabs" %}
{% endif %}

## Selected tabs

By using the [isSelected](../api/ribbon#contextualTabs#isSelected) property within each tab object, you can control the selection state of each contextual tab and indicate which tab is currently active.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/selected-tab" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/selected-tab/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/selected-tab" %}
{% endif %}

## Methods

### Show tab

You can make the specific tab visible by using the [showTab](../api/ribbon#contextualTabs#showTab) method available in the Ribbon.

### Hide tab

You can also hide specific tab by using the [hideTab](../api/ribbon#contextualTabs#hideTab) method available in the Ribbon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/method" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/contextual-tabs/method/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tabs/method" %}
{% endif %}