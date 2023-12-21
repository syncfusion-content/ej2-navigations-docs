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

# Adding Stepper steps

You can use the `steps` property to add the Stepper steps. The steps collections represent the options for each step within the stepper.

## Icon

You can use the `iconCss` property to specify and customize an icon for each step.

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

You can use the `text` property to specify the text content for each step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/text/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/text/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/text" %}

## Label

You can use the `label` property to provide additional information for each step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/label" %}

## Optional

You can use the `optional` property to determine whether the step can be skipped or not. By default the `optional` property is false.

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

You can use the `disabled` property to in-active any step. By default the `disabled` property is false.

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

You can toggle the `isValid` property based on the application logic to success or error states. If the current step is invalid, it prevents the user from moving on to the next one. The default value is `null`.

> Based on the stepper `stepType` the validation icons will be displayed either in the step indicator or as part of the step label/text.

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

You can use the`status` property to represent the progress states of each activeStep. The possible values are `NotStarted`, `InProgress` and `Completed`. By default, the value is `NotStarted.`

## CssClass

You can use the `cssClass` property to customize the appearance of the step.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/steps/cssClass/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/cssClass/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/cssClass/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/cssClass" %}