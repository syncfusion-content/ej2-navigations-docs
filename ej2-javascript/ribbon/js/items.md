---
layout: post
title: Ribbon Items in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Items with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Items

## Built-in Ribbon items

You can define each ribbon item using the [Items](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCollectionModel/#items) property of ribbon collection and the type should be specified in the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#type) property of ribbon item to define built-in items.

The following items can be rendered as built in items

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|

### Button

You can render a Button item by setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#type) property to `Button`. Also, you can customize the ribbon button using [ribbonButtonSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonButtonSettingsModel/).

#### Toggle Button

You can make use of [isToggle](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property to define whether the button is a toggle button or not. By default the value is `false`.


```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut",
                    isToggle: true
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");
```

### CheckBox

You can render a CheckBox item by setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItemModel/#type) property to `CheckBox`. Also, you can customize the checkbox using [ribbonCheckBoxSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCheckBoxSettingsModel/).

#### CheckBox State

You can make use of [checked](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property to define whether the checkbox is checked or not. A tick mark will be added to the visualization of CheckBox in checked state. By default the value is `false`.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "View",
        collections: [
          {
            items: [{
                type: "CheckBox",
                checkBoxSettings: {
                    label: "Ruler",
                    checked: true
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### Label and label Position

You can define the caption for a CheckBox, by utilizing the [label](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property. This helps in reducing the need for manually adding a separate label element. 
You can customize the position of the label relative to the CheckBox by using the [labelPosition](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property, which allows you to specify whether the label should appear before or after the CheckBox.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "View",
        collections: [
          {
            items: [{
                type: "CheckBox",
                checkBoxSettings: {
                    label: "Ruler",
                    labelPosition: "Before"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

### DropDown

You can render a DropDown item by setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. Also, you can customize the dropdown button using [ribbonDropDownSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonDropDownSettingsModel/).

#### Target

You can make use of [target](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property which specifies the selector for an element to be shown in the DropDownButton popup.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/dropdownTarget/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/dropdownTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownTarget" %}

### SplitButton

You can render a SplitButton item by setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. Also, you can customize the split button using [ribbonSplitButtonSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonSplitButtonSettingsModel/).

#### Target

You can make use of [target](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property which specifies the selector for the element to be shown in the SplitButton popup.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/splitButtonTarget/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/splitButtonTarget/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/splitButtonTarget" %}

### ComboBox

You can render a ComboBox item, by setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. Also, you can customize the combobox using [ribbonComboBoxSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/).

#### Filtering

You can make use of [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property which provides built-in support for filtering data items. As soon as you start typing the characters, the filter operation initiates automatically. If no match is found, the value of the `noRecordsTemplate` property will be displayed. By default the value is `false`.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    allowFiltering: true
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### Index

You can make use of [index](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property which specifies the index of the selected item in the combobox.

```js
var fontStyle = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia"];
var tabs = [{
    header: "Home",
    groups: [{
        header: "Font",
        collections: [
          {
            items: [{
                type: "ComboBox",
                comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

#### SortOrder

You can make use of [sortOrder](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property which specifies the order in which the data source needs to be sorted. The available type of sort orders are `None` - The data source is not sorted. `Ascending` - The data source is sorted in ascending order. `Descending` - The data source is sorted in descending order.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/sortOrder/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/sortOrder/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/sortOrder" %}

### ColorPicker

You can render a ColorPicker item by setting the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. Also, you can customize the colorpicker using [ribbonColorPickerSettingsModel](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonColorPickerSettingsModel/).

#### Value

You can specify the value color, by using the [value](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property. The value should be a valid hex color code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/colorPickerValue/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/colorPickerValue/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/colorPickerValue" %}

## Custom Ribbon items

You can use the [type](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#type) property and set it to `Template` to customize ribbon items with non-built-in items. This allows you to define your own custom template for the ribbon item, giving you the flexibility to create unique and personalized content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/customItem/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/customItem/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/customItem/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/customItem" %}

### Display Options 

By setting the [displayOptions](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#displayoptions) property you can determines how an item is displayed in different ribbon layouts.

`Auto` - The item is displayed in the classic layout group, simplified layout group, and overflow popup based on the ribbon's overflow state.
`Classic` - The item is displayed only in the classic layout group.
`Overflow` - The item is displayed only in the overflow popup.
`Simplified` - The item is displayed only in the simplified layout group.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/displayOptions/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/displayOptions/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/displayOptions" %}

## Enable or disable items

You can use the [disabled](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/ribbonItem/#disabled) property to disable an item. When set to `true`, the item will be disabled and prevents the user interaction with it. By default the value is `false`.

```js
var tabs = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        collections: [
          {
            items: [{
                type: "Button",
                disabled: true,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }]
        }]
    }]
}];

var ribbon = new ej.ribbon.Ribbon({
  tabs: tabs
});
ribbon.appendTo("#ribbon");
```