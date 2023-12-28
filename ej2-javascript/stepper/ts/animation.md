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

The Stepper progressbar can be animated for each step transition. You can also customize the animation's [enable](https://ej2.syncfusion.com/documentation/api/stepper/animationModel/#enable), [duration](https://ej2.syncfusion.com/documentation/api/stepper/animationModel/#duration) & [delay](https://ej2.syncfusion.com/documentation/api/stepper/animationModel/#delay), by using the [animation](https://ej2.syncfusion.com/documentation/api/stepper#animation) property.

## Enabling animation

You can use the [enable](https://ej2.syncfusion.com/documentation/api/stepper/animationModel/#enable) property to activate/deactivate the animation. By default, the enable property value is `true`.

## Animation duration

To specify the duration of the animation you can use the [duration](https://ej2.syncfusion.com/documentation/api/stepper/animationModel/#duration) property. The default value is set to `1000` milliseconds.

## Animation delay

You can use the [delay](https://ej2.syncfusion.com/documentation/api/stepper/animationModel/#delay) property to set the animation delay. The default value is `0` milliseconds.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/animation/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/animation/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/animation" %}