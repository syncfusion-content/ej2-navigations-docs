---
layout: post
title: Validation in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Validation with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Steps validation in ##Platform_Name## Stepper control

You can define the validation state of each step by setting the `isValid` property. If the `isValid` is set as `true`, it shows the success state if `false` it displays the error state of the steps. The default value is `null`.

> Based on the Stepper `stepType`, the validation icons will be displayed either as an indicator or as part of the step label/text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/validation/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/validation/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/validation/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/validation" %}