---
layout: post
title: Getting started with ##Platform_Name## Tab control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Tab control

This section briefly explains about how to create a simple [JavaScript Tab](https://www.syncfusion.com/javascript-ui-controls/js-tabs) using TypeScript and configure the Tab header content using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following is the list of dependencies required to use the Tab component in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Initialize the Tab using JSON items collection

The Tab can be rendered by defining a JSON array. The item is rendered with [`header`](../api/tab/tabItem/#header) text and [`content`](../api/tab/tabItem/#content) for each Tab using [`items`](../api/tab#items) property.

* Add the HTML div tag with its id attribute as `element` in your `index.html` file to initialize the Tab.

`[src/index.html]`

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>Essential JS 2</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        ....
        ....
    </head>

    <body>
        <div>
            <div id="element"></div>
        </div>
    </body>

    </html>
```

* Import the Tab component to your `app.ts` file and initialize it to the `#element` as shown below.

`[src/app/app.ts]`

```ts

import { Tab } from '@syncfusion/ej2-navigations';

let tabObj: Tab = new Tab({
    items: [
        {
            header: { 'text': 'Twitter' },
            content: 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
            'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
            'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
            'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
            'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
            'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
            'search queries per day.'
        },
        {
            header: { 'text': 'Facebook' },
            content: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
            'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
            'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
            'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
            'University. It gradually added support for students at various other universities and later to high-school students.'
        },
        {
            header: { 'text': 'WhatsApp' },
            content: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
            'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
            'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
            'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
            'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.'
        }
    ]
});
tabObj.appendTo('#element');

```

* Run the application in the browser using the following command.

```
npm start
```

Output will be as follows:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tab/tab-cs4" %}

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the Tab is initialized.

## Initialize the Tab using HTML elements

The Tab component can be rendered based on the given HTML element using `id` as `target`.

Header section must be enclosed with in a wrapper element using `e-tab-header` class and corresponding content must be mapped with `e-content` class.

You need to follow the below structure of HTML elements to render the Tab,

```

  <div id='tab_html_markup'>   --> Root Tab element
    <div class="e-tab-header">      --> Tab header
       <div>   --> Header Item
       </div>
    </div>
    <div class="e-content">      --> Tab content
       <div>   --> Content Item
       </div>
    </div>
  </div>

```

* Add the HTML template data with its id attribute and add it in your `index.html` file to initialize the Tab.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Tab</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="tab_html_markup">
            <div class="e-tab-header">
                <div>Twitter </div>
                <div>Facebook </div>
                <div>WhatsApp </div>
            </div>
            <div class="e-content">
                <div>
                        Twitter is an online social networking service that enables users to send and read short 140-character messages called 'tweets'. Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.
                </div>
                <div>
                        Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website's membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support for students at various other universities and later to high-school students.
                </div>
                <div>
                        WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model. It uses the Internet to send text messages, images, video, user location and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.
                </div>
            </div>
        </div>
    </div>
</body>

</html>
```

* Import the tab component to your `app.ts` file and initialize it to the element `#tab_html_markup` as shown below.

`[src/app/app.ts]`

```ts

import { Tab } from '@syncfusion/ej2-navigations';

let tab: Tab;
tab = new Tab();
tab.appendTo('#tab_html_markup');

```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tab/tab-template-cs1" %}

## See Also

* [How to load tab with DataSource](./how-to/load-tab-with-data-source/)

N> You can also explore our [JavaScript Tabs example](https://ej2.syncfusion.com/demos/#/material/tab/default.html) that shows you how to configure the Tabs in JavaScript.