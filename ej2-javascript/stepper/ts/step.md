---
layout: post
title: Step in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Step with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adding Stepper Steps

The `steps` property can be used to add the Stepper steps. The steps collections represent the options for each step within the stepper.

## Icon

The `iconCss` property allows us to specify and customize an icon for each step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/icon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/icon/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/icon/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/icon" %}

## Text

The `text` property allows to specify the text content for each step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/text/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/text/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/text/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/text" %}

## Label

By using the `label` property, additional information can be provided for each step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/label/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/label/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/label" %}

## Optional

The `optional` property defines whether the step is optional to skip completion or not. By default the `optional` property is false.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/optional/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/optional/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/optional/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/optional" %}

## Disabled

The `disabled` property can be used to disable any step. By default the `disabled` property is false.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/disabled/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/disabled/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/disabled/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/disabled" %}

## Validation

Setting the `isValid` property to true for valid completion; otherwise, set it to false. Indicates whether a step has met its required criteria. The default value is false.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/validation/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/validation/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/validation/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/validation" %}

## Status

The `status` property holds a `StepperStatus` value representing the progress state of each step. You can set the status for the current active step (StepperStatus.NotStarted, StepperStatus.InProgress, StepperStatus.Completed). The default value is `NotStarted.`

## CssClass

The `cssClass` property is used to set a custom CSS class for customizing the appearance of the step.
