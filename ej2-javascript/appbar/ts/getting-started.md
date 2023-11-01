---
layout: post
title: Getting started with ##Platform_Name## Appbar control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Appbar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Appbar control

This section explains how to create a simple AppBar and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the AppBar component in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
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

To render AppBar component, need to import navigations and its dependent components styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding AppBar component to the application

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls.

Add the HTML div tag with its `id` attribute as `appbar` in your `index.html` file to initialize the Appbar.

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
</head>

<body>
    <div class="control-container">
        <div id="appbar"></div>
    </div>
</body>

</html>
{% endhighlight %}
{% endtabs %}

Import the AppBar component in your `app.ts` file and initialize it with the `#appbar`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { AppBar } from "@syncfusion/ej2-navigations";

const apparObj = new AppBar({
  colorMode: 'Primary'
});
appbarObj.appendTo("#appbar");

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic AppBar component.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs1" %}
