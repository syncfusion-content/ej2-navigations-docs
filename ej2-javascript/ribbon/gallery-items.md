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

#### Item Content

You can use the `content` property to define the text content for the gallery item.

#### IconCss

You can use the `iconCss` property to customize the gallery icon.

#### Html Attributes

You can use the `htmlAttributes` property to specify additional HTML attributes to be applied to the Ribbon Gallery item. 

#### cssClass

You can use the `cssClass` property to customize the gallery item.

#### Disabled Item

You can use the `disabled` property to disable a Ribbon gallery item. It prevents the user interaction when set to `true`. By default, the value is `false`.

### Item Count

You can customize the Ribbon Gallery display by utilizing the `itemCount` property, enabling you to specify the desired number of items.

### Selected Item Index

The `selectedItemIndex` property defines the index of the currently selected item in the Ribbon Gallery, offering control over the default or dynamic selection for an interactive user experience.

### Popup Height

You can specify the height of the popup that displays the Ribbon Gallery by using the `popupHeight` property, allowing you to control and customize the vertical dimensions for an optimized visual presentation.

### Popup Width

you can control the width of the popup in the Ribbon Gallery by using the `popupWidth` propery, providing control and customization for an optimized visual layout

### Template

You can customize the default appearance and content of Ribbon Gallery items to create a personalized user experience. Utilize the `template` property to set custom content for the items.

### Popup Template

You can customize the appearance and content of Ribbon Gallery items within the popup for a personalized user experience. Utilize the `popupTemplate` property to set a custom template specifically designed for items displayed in the popup.

### Events

This section describes the events that will be triggered when an appropriate actions are performed in ribbon gallery. The following events are available in the Ribbon gallery.

#### popupOpen

The `popupOpen` event is triggered when the gallery popup opens.

#### popupClose

The `popupClose` event is triggered when the gallery popup closes.

#### itemHover

The `itemHover` event is triggered when hovering over a gallery item.

#### beforeItemRender

The `beforeItemRender` event is triggered while rendering each gallery item.

#### beforeSelect

The `beforeItemRender` event is triggered before item in the Ribbon Gallery is selected.

#### select

The `select` event is triggered while selecting an item in the Ribbon Gallery.