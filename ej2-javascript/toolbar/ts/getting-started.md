---
layout: post
title: Getting started with ##Platform_Name## Toolbar control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Toolbar control

This section explains how to create a simple **Toolbar** using TypeScript, and how to configure ToolBar items like button, separator, and input components using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the Toolbar component in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2/material.css";

{% endhighlight %}
{% endtabs %}

## Initialize the Toolbar with commands

The Toolbar can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/documentation/api/toolbar/#items). An item is rendered with text by defining the default item type as a `Button`. For more information about item configuration, refer to the [Item Configuration](./item-configuration) section.

* Add the HTML div tag with its `id` attribute set to `element` in your `index.html` file where you will initialize the Toolbar.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    ....
    ....
</head>

<body>
    <div style="margin: 50px;">
        <div id="element"></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

* Import the Toolbar component to your `app.ts` file, and initialize it to the element `#element` as shown below.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Toolbar } from '@syncfusion/ej2-navigations';

// Initialize Toolbar component
let toolbarObj: Toolbar = new Toolbar( {
    items: [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' },
    { type: 'Separator'},
    { text: 'Bold' },
    { text: 'Italic' },
    { text: 'Underline' },
    ]
});

// Render initialized Toolbar
toolbarObj.appendTo('#element');

{% endhighlight %}
{% endtabs %}

* Now, run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will look like this:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs3" %}

> In the above sample code, `#element` is the `id` of the HTML element in a page where the Toolbar is initialized.

## See Also

* [Initialize the toolbar using HTML elements](../toolbar/template-configuration)

N> You can refer to our [JavaScript Toolbar](https://www.syncfusion.com/javascript-ui-controls/js-toolbar) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Toolbar example](https://ej2.syncfusion.com/demos/#/fabric/toolbar/default.html) that shows you how to render the Toolbar in JavaScript.