---
layout: post
title: Ribbon Keytip in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Keytip with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Keytips

The Ribbon supports keyboard navigations to interact the ribbon items using the keytips which can be enabled by setting the `enableKeyTips` property.

The keytips will be shown when the `Alt + Windows/Command` keys are pressed.

## Ribbon items keytip

You can add keytips to all the ribbon items by using the `keyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/item-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/item-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/item-keytip" %}

## File menu keytip

You can add keytips to the file menu by using the `keyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/filemenu-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/filemenu-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/filemenu-keytip" %}

## Backstage menu keytip

You can add keytips to backstage menu items by using the `keyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/backstagemenu-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/backstagemenu-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/backstagemenu-keytip" %}

## Ribbon layout switcher keytip

You can add keytip to the layout switcher by using the `layoutSwitcherKeyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/layout-switcher-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/layout-switcher-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/layout-switcher-keytip" %}

## Ribbon launcher icon keytip

You can add keytip to the launcher icon by using the `launcherIconKeyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/launcher-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/launcher-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/launcher-keytip" %}

## Guidelines for adding keytips

* The keytip to the ribbon items can have a maximum of three letters. The text count greater than (>3) results in an exception.

* Avoid using the same keytip setting on multiple items.

> For example: When you add the keytip text "H" or "HF" for the same items, it activates the first item occurrence of "H", while any subsequent instances of "H" or "HF" are ignored.

* Do not use the same first letter for the single and double keytip items.

> For example: When accessing keytip text F, FP and FPF added for the different ribbon items and pressing F key, only the F key tip associated item will be activated while the FP, FPF associated ribbon items will be ignored.
