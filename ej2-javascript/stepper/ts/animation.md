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

# AnimationSettings

The Stepper progress bar can be animated during each step transition. You can use the `animation` property in the Stepper setting the `enable` property to `true`. By default, it is `true`.

## Enabling animation

By using, the `enable` property to activate/deactivate an animation. The default value is true, indicating that animation is enabled.

## Duration

The `duration` property specifies the duration of the animation. The default value is set to `1000` milliseconds.

## Delay

The `delay` property sets the animation delay. The default value is `0` milliseconds.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/animation/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/animation/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/animation/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/animation" %}