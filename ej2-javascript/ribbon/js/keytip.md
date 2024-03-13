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

# Ribbon Keytip

The Ribbon supports keytips, which enhance user accessibility and efficiency by providing keyboard shortcuts for navigating through the ribbon interface without the need for a mouse. The keytip can be enabled by setting the `enableKeyTips` property.

The keytips will be displayed when the Alt + Windows/Command key is pressed.

## Ribbon items keytip

You can add keytip to all the ribbon items by using the `keyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/item-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/item-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/item-keytip" %}

## Ribbon file menu keytip

You can add keytip to file menu by using the `keyTip` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/filemenu-keytip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/filemenu-keytip/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/filemenu-keytip" %}

## Ribbon backstage menu keytip

You can add keytip to backstage menu by using the `keyTip` property.

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

You can add keytip to layout switcher by using the `layoutSwitcherKeyTip` property.

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

You can add keytip to launcher icon by using the `launcherIconKeyTip` property.

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

* The keytip to the ribbon elements can have a maximum of three letters. A deviation from the text count (>3) results in an exception.

* Avoid using the same keytip setting on multiple elements.

* Do not use the same first letter for the single and double keytip elements.
