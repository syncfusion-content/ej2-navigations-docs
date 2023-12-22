---
layout: post
title: Globalization in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Globalization with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Global local in ##Platform_Name## Stepper control

## Localization

The Localization library allows you to localize `optional` property of the Stepper. Optional property of the stepper control can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the `locale` value and translation object. In the below sample, `French` culture is set to Stepper and changed the optional property text.

Locale key |en-US (default)
-----|-----
optional | Optional

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/localization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/localization/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/localization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/localization" %}

## RTL

RTL provides an option to switch the text direction and layout of the Stepper control from right to left. It improves the user experiences and accessibility for users who use right-to-left languages. To enable RTL, set the [enableRtl](https://ej2.syncfusion.com/documentation/api/stepper#enablertl) to true.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/rtl/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/rtl/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/rtl/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/rtl" %}