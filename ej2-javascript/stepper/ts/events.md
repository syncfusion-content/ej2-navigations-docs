---
layout: post
title: Events in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Events with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events

This section describes the stepper events that will be triggered when an appropriate actions are performed. The following events are available in the stepper control.

## created

The `created` event is triggered when the Stepper component is initially created.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/created/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/created/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/events/created/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/created" %}

## stepChanged

The `stepChanged` event occurs when the active step in the Stepper changes. The `StepperChangedEventArgs` passed as an event argument provides the information about stepChanged event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepChanged/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepChanged/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/events/stepChanged/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepChanged" %}

## stepChanging

The `stepChanging` event is triggered before the active step changes in the Stepper. The `StepperChangingEventArgs` passed as an event argument provides the information about stepChanging event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepChanging/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepChanging/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/events/stepChanging/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepChanging" %}

## stepClick

The `stepClick` event is triggered when a step in the Stepper is clicked. The `StepperClickEventArgs` passed as an event argument provides the information about stepClick event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepClick/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/events/stepClick/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepClick" %}

## beforeStepRender

The `beforeStepRender` event occurs before a step is rendered in the Stepper. The `StepperRenderingEventArgs` passed as an event argument provides the information about beforeStepRender event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/beforeStepRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/beforeStepRender/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/events/beforeStepRender/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/beforeStepRender" %}