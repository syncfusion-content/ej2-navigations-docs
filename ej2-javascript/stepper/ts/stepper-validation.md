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

# Validating steps 

The validation state of the particular step is indicated by using the the `isValid` property. You can toggle the `isValid` property to `null`, `true` & `false` based on the application logic to default, success & error states. If the current step is invalid, the step needs attention before proceeding to the next step.

> Based on the Stepper `stepType`, the validation icons will be displayed either as an indicator or as part of the step label/text.

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