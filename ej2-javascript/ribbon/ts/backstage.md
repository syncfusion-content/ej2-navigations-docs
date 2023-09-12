---
layout: post
title: Ribbon Backstage in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Backstage with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Backstage

The Ribbon control provides a built-in backstage menu that allows you to add menu items for performing specific actions on the entire page. The backstage menu can be enabled by setting the [backStageMenu](https://ej2.syncfusion.com/documentation/api/ribbon#backstagemenu) property.

## Configure the backstage items

You can add the backstage menu items by setting the [items]() property as an array of [`BackstageItemModel`](). You can show the backstage menu by setting the [visible]() property to `true`. By default, the backstage menu is hidden.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/backstage-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/backstage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/backstage-cs1" %}

## Adding separator

The separators are horizontal lines used to separate the backstage menu items. You cannot select the separators, but you can enable separators to group the menu items using the [`separator`]() property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/separator-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/separator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/separator-cs1" %}

## Configure footer items

You can add the backstage footer menu items by setting the [items]() property with a boolean property of [isFooter]() as a condition for items to render in footer.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/footer-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/footer-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/footer-items-cs1" %}

## Show/Hide backstage

You can open/close the ribbon backstage programmatically using [showBackstage] and [hideBackstage] methods.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/show-hide-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/show-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/show-hide-cs1" %}
