---
layout: post
title: Ribbon Modules in  ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Ribbon Modules with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Modules
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Ribbon control

The following modules are available in Ribbon. If the module injection type is **selective**, manual injection is required to extend the Ribbon's functionality.

| Module | Description | Module Injection Type |
|------|-------------|------|
| `RibbonButton` | To use the built-in button as a ribbon item. | default |
| `RibbonCheckBox` | To use the built-in checkbox as a ribbon item.| default |
| `RibbonDropDown` | To use the built-in dropdown button as a ribbon item.| default |
| `RibbonSplitButton` | To use the built-in split button as a ribbon item.| default |
| `RibbonComboBox` | To use the built-in combobox as a ribbon item. | default |
| `RibbonColorPicker` | Inject this module to use the built-in colorpicker as a ribbon item.| selective |
| `RibbonFileMenu` | Inject this module to use the file menu feature.| selective |

These selective modules should be injected into the Ribbon using the `Ribbon.Inject` method.

`[ts]`

```typescript
Ribbon.Inject(RibbonFileMenu, RibbonColorPicker);
```
