---
layout: post
title: Accessibility in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Accessibility with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Stepper control

Accessibility is achieved in the Stepper control through WAI-ARIA standard and keyboard navigations. The Stepper control can be effectively accessed through assistive technologies such as screen readers.

## ARIA attribute

The following ARIA attributes are used in Stepper control based on its state.

| Properties | Functionality |
| ------------ | ----------------------- |
| aria-label | Attribute provides the text label with some default description for the Stepper. |
| aria-current | Indicates the current active step within the stepper. |
| aria-disabled | Indicates that the associated step in the stepper is disabled and cannot be interacted with. |

## User interaction with keyboard

<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Up Arrow</kbd></td><td>
Focuses the previous step in a vertical Stepper.</td></tr>
<tr>
<td>
<kbd>Down Arrow</kbd></td><td>
Focuses the next step in a vertical Stepper.</td></tr>
<tr>
<td>
<kbd>Left Arrow</kbd></td><td>
 Focuses the previous step in a horizontal Stepper.</td></tr>
<tr>
<td>
<kbd> Right Arrow</kbd></td><td>
Focuses the next step in a horizontal Stepper</td></tr>
<tr>
<td>
<kbd>Home </kbd></td><td>
Focuses on the first step of the Stepper.</td></tr>
<tr>
<td>
<kbd>End </kbd></td><td>
Focuses on the last step of the Stepper.</td></tr>
<tr>
<td>
<kbd>Enter / Space</kbd></td><td>
Activates the currently focused step.</td></tr>
<tr>
<td>
<kbd>Tab  </kbd></td><td>
 Moves the focus away from the Stepper..</td></tr>
</table>