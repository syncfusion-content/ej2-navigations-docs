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

Use the `isValid` property in the Stepper to check the status of a specific step.

When `isValid` is set to true, the step meets the required criteria. If set to `false`, the step needs attention or completion. It provides clear feedback on the status of individual steps within the Stepper, enhancing the user interaction.

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