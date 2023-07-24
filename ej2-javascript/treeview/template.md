---
layout: post
title: Template in ##Platform_Name## Treeview control | Syncfusion
description: Learn here all about Template in Syncfusion ##Platform_Name## Treeview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Treeview control

The TreeView component allows you to customize the look of TreeView nodes by using the [nodeTemplate](https://helpej2.syncfusion.com/documentation/api/treeview/#nodetemplate) property. This property accepts either [template string](https://helpej2.syncfusion.com/documentation/common/template-engine) or HTML element ID.

In the following sample, employee information such as employee photo, name, and designation have been included using the `nodeTemplate` property.

The template expression should be provided inside the `${...}` interpolation syntax.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/templates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/templates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/templates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/templates-cs1" %}
{% endif %}

## See Also

* [How to customize the expand and collapse icons](https://helpej2.syncfusion.com/documentation/treeview/how-to/customize-the-expand-and-collapse-icons)
* [How to customize the tree nodes based on levels](https://helpej2.syncfusion.com/documentation/treeview/how-to/customize-the-tree-nodes-based-on-levels)