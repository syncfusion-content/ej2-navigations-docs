---
layout: post
title: Step Type in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Step Type with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# StepType

The [stepType](https://ej2.syncfusion.com/documentation/api/stepper#steptype) property in the Stepper determines whether steps should be displayed using only with indicators, only labels, or a combination of both. The available values for this property are `default`, `label`, and `indicator`.

## Default

Steps are displayed with icons and the labels when defined.

## Label

Steps are displayed with their defined labels only.

### Label positions

The Stepper control allows you to place the label on the top, bottom, left, or right side of the stepper using the [labelPosition](https://ej2.syncfusion.com/documentation/api/stepper#labelposition) property.

The following label positions are supported in stepper:

* Top: Positions the label at the top of the stepper.
* Bottom: Positions the label at the bottom of the stepper.
* Start: Positions the label to the left side of the stepper.
* End: Positions the label to the right side of the stepper.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/labelPosition/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/labelPosition/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/labelPosition/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/labelPosition" %}

## Indicator

Steps are displayed with only indicators.

The example below showcases the various types of steps available in the stepper.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/stepType/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/stepType/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/stepType/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/stepType" %}