---
layout: post
title: Step Type in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Step Type with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Step Type

The `stepType` property in the Stepper determines whether steps should be displayed using only with indicators, only labels, or a combination of both. The available values for this property are `default`, `label`, and `indicator`.

## Default
Steps are displayed with icons and the labels when defined.

## Label

Steps are displayed with only labels irrespective of the step model configured.


### Label Positions
The `labelPosition` property offers four positioning options: `Top`, `Bottom`, `Start`, and `End`. This property indicated the placement of the labels, depending on the updated position. The labels can be positioned only when the icon and label is configured with the stepper step. The available positions are as follows:

#### Top
Positions the label at the top, regardless of the Stepper's orientation.

#### Bottom
Positions the label at the bottom, regardless of the Stepper's orientation.

#### Start
Positions the label on the left side, regardless of the Stepper's orientation.

#### End
Positions the label on the right side, regardless of the Stepper's orientation. By default `labelPosition` is set to `End`.

## Indicator
Steps are displayed with only indicators.