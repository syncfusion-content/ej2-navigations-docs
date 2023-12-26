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

The [created](https://ej2.syncfusion.com/documentation/api/stepper#created) event is triggered when the Stepper control is initially created.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/created/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/created" %}

## stepChanged

The [stepChanged](https://ej2.syncfusion.com/documentation/api/stepper#stepchanged) event occurs when the active step in the Stepper changes. The [StepperChangedEventArgs](https://ej2.syncfusion.com/documentation/api/stepper/stepperChangedEventArgs/) passed as an event argument provides the information about stepChanged event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepChanged/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepChanged/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepChanged" %}

## stepChanging

The [stepChanging](https://ej2.syncfusion.com/documentation/api/stepper#stepchanging) event is triggered before the active step changes in the Stepper. The [StepperChangingEventArgs](https://ej2.syncfusion.com/documentation/api/stepper/stepperChangingEventArgs/) passed as an event argument provides the information about stepChanging event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepChanging/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepChanging/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepChanging" %}

## stepClick

The [stepClick](https://ej2.syncfusion.com/documentation/api/stepper#stepclick) event is triggered when a step in the Stepper is clicked. The [StepperClickEventArgs](https://ej2.syncfusion.com/documentation/api/stepper/stepperClickEventArgs/) passed as an event argument provides the information about stepClick event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/stepClick/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/stepClick/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/stepClick" %}

## beforeStepRender

The [beforeStepRender](https://ej2.syncfusion.com/documentation/api/stepper#beforesteprender) event occurs before a step is rendered in the Stepper. The [StepperRenderingEventArgs](https://ej2.syncfusion.com/documentation/api/stepper/stepperRenderingEventArgs/) passed as an event argument provides the information about beforeStepRender event callback.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/events/beforeStepRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/events/beforeStepRender/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/events/beforeStepRender" %}