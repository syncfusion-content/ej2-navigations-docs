---
layout: post
title: Animation in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Animation with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Stepper control

The Stepper progressbar can be animated for each step transition. You can enable/disable the animation by setting the [enable](https://ej2.syncfusion.com/javascript/documentation/api/stepper/animationModel/#enable) property. By default, the property value is `true`.

You can also customize the animation's [duration](https://ej2.syncfusion.com/javascript/documentation/api/stepper/animationModel/#duration) & [delay](https://ej2.syncfusion.com/javascript/documentation/api/stepper/animationModel/#delay), by using the [animation](https://ej2.syncfusion.com/javascript/documentation/api/stepper#animation) property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
delay</td><td>
The Stepper animation will start with the mentioned delay. The default value is `0` milliseconds.</td></tr>
<tr>
<td>
duration</td><td>
Specifies the animation duration to complete with one animation cycle. By default, the value is `1000` milliseconds.</td></tr>
</table>

In the below sample, animation is enabled and the `duration`, `delay` are configured for the Stepper.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/animation/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/animation/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/animation" %}