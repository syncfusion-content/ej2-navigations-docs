---
layout: post
title: Ribbon Gallery Items in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Gallery Items with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Gallery Items in ##Platform_Name## Ribbon Control

Gallery items in the ribbon component are visual representations of commands or options, providing a quick way for users to access and execute specific functions. Galleries display related items visually, giving users a fast and easy way to choose or move through different options, making things simple and quick for everyone.

You can render the gallery Ribbon item by setting the `type` property to `Gallery`. You can also customize the gallery item using the `RibbonGallerySettingsModel`, which provides options such as `groups`, `itemCount`, `popupHeight`, `popupWidth` and more.

## Groups 

Groups in the gallery organize related items, simplifying user navigation. You can render the group inside the gallery items by using `groups` property. You can also customize the group in gallery items through `RibbonGalleryGroupModel`, which provides options such as `items`, `iconCss`, `header` and more.

### Items

Gallery items represent individual elements within a group, allowing users to interact with specific functionalities. You can render the gallery items by using `items` property. You can also customize the gallery items through `RibbonGalleryItemModel`,  which provides options such as `content`, `iconCss`, `disabled` and more.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}
{% endif %}

#### Item Content

You can use the `content` property to define the text content for the gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/itemContent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemContent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemContent" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/itemContent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemContent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemContent" %}
{% endif %}

#### IconCss

You can use the `iconCss` property to define the icons for the gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/galleryItems/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/galleryItems" %}
{% endif %}

#### Html Attributes

You can use the `htmlAttributes` property to specify additional HTML attributes to be applied to the Ribbon Gallery item.

The following sample showcases how to add title attribute to the gallery item using `htmlAttributes` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/htmlAttributes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/htmlAttributes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/htmlAttributes" %}
{% endif %}

#### cssClass

You can use the `cssClass` property to customize the gallery item.

The following sample showcases how to customize the appearance of each gallery item using the `cssClass` property .

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/gallery/classCustomization/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/classCustomization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/classCustomization/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/gallery/classCustomization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/classCustomization" %}
{% endif %}

#### Disabled Item

You can use the `disabled` property to disable a Ribbon gallery item. It prevents the user interaction when set to `true`. By default, the value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/disabledItem" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/disabledItem/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/disabledItem" %}
{% endif %}

### Item Count

You can customize the Ribbon Gallery display by utilizing the `itemCount` property, enabling you to specify the desired number of items. By default the `itemCount` will be `Three`.

The following example showcases the utilization of the `itemCount` property, displaying a ribbon gallery containing four items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/itemCount/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemCount/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemCount" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/itemCount/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemCount/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemCount" %}
{% endif %}

### Selected Item Index

The `selectedItemIndex` property defines the index of the currently selected item in the Ribbon Gallery, offering control over the default or dynamic selection for an interactive user experience.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/selectedItemIndex" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/selectedItemIndex/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/selectedItemIndex" %}
{% endif %}

### Popup Height

You can specify the height of the popup that displays the Ribbon Gallery by using the `popupHeight` property, allowing you to control and customize the vertical dimensions for an optimized visual presentation.

### Popup Width

you can control the width of the popup in the Ribbon Gallery by using the `popupWidth` propery, providing control and customization for an optimized visual layout

The example demonstrates the customization of popup with `popupHeight` and `popupWidth` properties.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupHeightWidth" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupHeightWidth/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupHeightWidth" %}
{% endif %}

### Template

You can customize the default appearance and content of Ribbon Gallery items to create a personalized user experience. Utilize the `template` property to set custom content for the items.

### Popup Template

You can customize the appearance and content of Ribbon Gallery items within the popup for a personalized user experience. Utilize the `popupTemplate` property to set a custom template specifically designed for items displayed in the popup.

### Events

This section describes the events that will be triggered when an appropriate actions are performed in ribbon gallery. The following events are available in the Ribbon gallery.

#### popupOpen

The `popupOpen` event is triggered when the gallery popup opens.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/popupOpen/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupOpen/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupOpen" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/popupOpen/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupOpen/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupOpen" %}
{% endif %}

#### popupClose

The `popupClose` event is triggered when the gallery popup closes.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/popupClose/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupClose/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupClose" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/popupClose/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/popupClose/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/popupClose" %}
{% endif %}

#### itemHover

The `itemHover` event is triggered when hovering over a gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/itemHover/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemHover/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemHover" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/itemHover/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/itemHover/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/itemHover" %}
{% endif %}

#### beforeItemRender

The `beforeItemRender` event is triggered while rendering each gallery item.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/beforeItemRender/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/beforeItemRender/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/beforeItemRender" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/beforeItemRender/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/beforeItemRender/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/beforeItemRender" %}
{% endif %}

#### beforeSelect

The `beforeSelect` event is triggered before item in the Ribbon Gallery is selected.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/beforeSelect/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/beforeSelect/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/beforeSelect" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/beforeSelect/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/beforeSelect/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/beforeSelect" %}
{% endif %}

#### select

The `select` event is triggered while selecting an item in the Ribbon Gallery.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/gallery/select/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/select/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/gallery/select" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/gallery/select/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/gallery/select/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/gallery/select" %}
{% endif %}