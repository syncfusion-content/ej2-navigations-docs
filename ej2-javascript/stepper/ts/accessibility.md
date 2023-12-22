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
| `aria-label` | Attribute provides the text label with some default description for the Stepper. |
| `aria-current` | Indicates the current activestep in the stepper. |
| `aria-disabled`| Indicates when the stepper step is disabled and cannot be interacted. |

## User interaction with keyboard

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Up Arrow</kbd> | Focuses the previous step in a vertical Stepper. |
| <kbd>Down Arrow</kbd> | Focuses the next step in a vertical Stepper. |
| <kbd>Left Arrow</kbd> | Focuses the previous step in a horizontal Stepper. |
| <kbd>Right Arrow</kbd> | Focuses the next step in a horizontal Stepper. |
| <kbd>Home</kbd> | Focuses on the first step of the Stepper. |
| <kbd>End</kbd> | Focuses on the last step of the Stepper. |
| <kbd>Enter / Space</kbd> | Activates the currently focused step. |
| <kbd>Tab</kbd> | Moves the focus away from the Stepper. |
