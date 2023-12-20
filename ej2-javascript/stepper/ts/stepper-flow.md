---
layout: post
title: Stepper Flow in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Stepper Flow with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Stepper Flow

The Stepper component provides control over the flow of steps through the utilization of the `linear` property.

## Linear flow

When the `linear` property is set to `true`, it enables a linear progression. You can move through steps one after another. By default, the `linear` property value is `false`.

## Non-Linear flow

In non-liner flow, the users can skip or complete steps in any order they like.

## Configure activeStep

The `activeStep` in the Stepper represents the step currently in the focus or selected by the user. You can set the active step of the stepper by assigning a value to the activeStep property. By default the `activeStep` is `0`.

The following example highlights the difference between linear and non-linear steppers, showcasing how to utilize the active step property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/linearStep/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/linearStep/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/linearStep/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/linearStep" %}