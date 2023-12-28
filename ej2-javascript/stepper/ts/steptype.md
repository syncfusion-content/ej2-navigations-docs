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

# Step types in ##Platform_Name## Stepper control

The Stepper control enables you to specify its display mode by using the [stepType](https://ej2.syncfusion.com/documentation/api/stepper#steptype) property which can be set to indicator only, only labels or the combination of both. The valid values for this property are `Default`, `Label`, and `Indicator`. By default, the stepType is `Default`.

## Default

The display mode `Default` in the Stepper will display both the indicators and the labels when defined in the `stepModel`.

## Label

The display mode `Label` in the Stepper will display only the labels irrespective of the `stepModel` defined.

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

The display mode `Indicator` in the Stepper will display only the indicators irrespective of the `stepModel` defined.

The below example, showcases the various `stepType` available in the stepper.

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