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

# Stepper sequence in ##Platform_Name## Stepper control

The Stepper control allows you to manage the step flow by using the [linear](https://ej2.syncfusion.com/documentation/api/stepper#linear) property.

## Linear flow

In linear state, you can proceed through the steps sequentially in a linear manner, by setting the [linear](https://ej2.syncfusion.com/documentation/api/stepper#linear) property to `true`. By default, the linear property value is `false`.

## Non-Linear flow

In non-linear state, you have the flexibility to choose any step by default.

## Specify activeStep

You can specify the currently focused or user-selected step by using the [activeStep](https://ej2.syncfusion.com/documentation/api/stepper#activestep) property. By default the activeStep is `0`.

The following example highlights the difference between linear and non-linear steppers, showcasing how to utilize the activeStep property.

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