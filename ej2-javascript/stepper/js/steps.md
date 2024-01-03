---
layout: post
title: Steps in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Steps with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Steps in ##Platform_Name## Stepper control

You can define the steps by using the [steps](https://ej2.syncfusion.com/javascript/documentation/api/stepper/#steps) property. You can configure each step which provides options such as `iconCss`, `text`, `label`, `cssClass` and more.

## Steps in Stepper

You can customize the icon, text and label of the steps by using the `iconCss`, `text` and `label` properties.

### Defining step icons

You can display only icons for each step by using the `iconCss` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/icon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/icon/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/icon/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/icon" %}

### Defining step content

You can display only text for each step by setting the `text` property. You can show only label for each step by setting the `label` property.

> Depending on the `stepType`, if both label and text are defined the label takes priority to diplay the content.

In the below sample, the Stepper is rendered with texts.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/text/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/text/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/text" %}

In the below sample, the Stepper is rendered with labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/label/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/label" %}

## Optional steps

You can determine whether the step can be skipped or not by setting the `optional` property. By default, the `optional` property is false.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/optional/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/optional/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/optional/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/optional" %}

## Enable or disable steps

You can disable any step by setting the `disabled` property as `true`. By default, the `disabled` property is false.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/disabled/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/disabled/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/disabled/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/disabled" %}

## Defining active step

You can specify the current selected step by using the [activeStep](https://ej2.syncfusion.com/javascript/documentation/api/stepper#activestep) property. The value gets updated for each interaction with the step. By default, the activeStep is `0`.

The following example showcases how to utilize the active step property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/activeStep/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/activeStep/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/activeStep/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/activeStep" %}

## Steps status

The progress state of each activeStep can be updated by using the `status` property. The possible values are `NotStarted`, `InProgress` and `Completed`. By default, the value is `NotStarted.`

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/status/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/status/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/status/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/status" %}

## Customization

You can use the `cssClass` property to customize the appearance of each step.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/cssClass/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/cssClass/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/cssClass/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/cssClass" %}

## Steps validation

Specifies the validation state of each step in the Stepper.

> To know more about Stepper validation, refer the [Validation](./stepper-validation#validating-steps) section.