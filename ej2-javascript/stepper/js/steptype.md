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

The Stepper control can be displayed in `Default`, `Label`, and `Indicator` types by using the [stepType](https://ej2.syncfusion.com/javascript/documentation/api/stepper#steptype)  property. By default, the property value is `Default`.

## Default

In `Default` display mode, the Stepper will display both the icons and the labels when defined in the `stepModel`.

## Label

In `Label` display mode, the Stepper will display only the labels regardless of the configured `stepModel` options such as text and iconCss.

### Label positions

The Stepper control allows you to place the label on the top, bottom, left, or right side of the Stepper using the [labelPosition](https://ej2.syncfusion.com/javascript/documentation/api/stepper#labelposition) property.

The following label positions are supported in Stepper:

* Top: Positions the label at the top of the Stepper.
* Bottom: Positions the label at the bottom of the Stepper.
* Start: Positions the label to the left side of the Stepper.
* End: Positions the label to the right side of the Stepper.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/labelPosition/index.js %}
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

In `Indicator` display mode, the Stepper will display only the icons irrespective of the `stepModel` options such as text and label.

The below example, showcases the various `stepType` available in the Stepper.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/stepType/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/stepType/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/stepType/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/stepType" %}