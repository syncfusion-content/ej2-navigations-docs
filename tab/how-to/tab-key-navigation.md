---
layout: post
title: Tab key navigation in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Tab key navigation in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tab key navigation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tab key navigation in ##Platform_Name## Tab control

The [`tabIndex`](../api/tab/tabItem/#tabindex) property of a Tab item is used to enable tab key navigation for that particular item. When a positive value is assigned to the [`tabIndex`](../api/tab/tabItem/#tabindex) property, it allows the user to switch focus to the next or previous tab item using the Tab or Shift+Tab keys. By default, the user can only switch between tab items using the arrow keys.

If the [`tabIndex`](../api/tab/tabItem/#tabindex) value is set to 0 for all tab items, the tab will switch based on the order of the elements on the page. This means that if the tab items are listed in a specific order on the page, the user will be able to navigate through them using the Tab key in that same order.

To use the [`tabIndex`](../api/tab/tabItem/#tabindex) property, you can assign a positive value to the property of each tab item that you want to enable tab key navigation. For example:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-selection-cs1" %}
{% endif %}

With this code, the user will be able to switch between the tab items using the Tab and Shift+Tab keys, in the order specified by the [`tabIndex`](../api/tab/tabItem/#tabindex) values.

It's important to note that the [`tabIndex`](../api/tab/tabItem/#tabindex) property only affects the ability to navigate between tab items using the Tab key. The user will still be able to use the arrow keys to switch between tab items, regardless of the value of the [`tabIndex`](../api/tab/tabItem/#tabindex) property.