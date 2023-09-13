---
layout: post
title: Ribbon Backstage in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Ribbon Backstage with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Backstage

The Ribbon supports backstage view which is an addition to the traditional file menu. It displays information like application settings, user details, etc. The backstage view can be enabled by setting the `backStageMenu` property.

The backstage view options are displayed on the left, while the content of each option is shown on the right.

## Adding the backstage items

The menu items can be added to the backstage view by using the `items` property. You can show the backstage view by setting the `visible` property to `true`. By default, the backstage view is hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/backstage-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/backstage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/backstage-cs1" %}

## Adding separator

The separators are horizontal lines used to separate the backstage view items. You can use the `separator` property to split the menu items.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/separator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/separator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/separator-cs1" %}

## Adding footer items

You can use the `isFooter` property in the `items` collection to add the backstage view footer items. By default, the value is false.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/footer-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/footer-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/footer-items-cs1" %}

## Show/hide backstage

You can open/close the ribbon backstage view programmatically by using `showBackstage` and `hideBackstage` methods.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/show-hide-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/show-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/show-hide-cs1" %}
