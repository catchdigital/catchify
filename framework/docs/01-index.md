---
title: Catchify
---

 - **[Intro](#intro)**
 - **[Structure](#structure)**
  - [Base](#base)
  - [Atoms](#atoms)
  - [Components](#components)
  - [Templates](#templates)
 - **[Distributed code](#distributed-code)**
  - [HTML](#html)
  - [CSS](#css)
    - [Use bundled CSS](#use-bundled-css)
  - [JavaScript](#javascript)
    - [Use bundled JS](#use-bundled-js)
---

## Intro

**Catchify is a pattern library that forms the core of Catch's digital UI from 2020 onwards.**

This library is a collection reusable components and settings you can use in your projects to save time.
We've

*Catchify has been built using [Fractal](https://fractal.build).*

---

## Structure
Components have been grouped into the following heirarchical groups:

### Base
These styles form the backbone of the UI and are considered 'base' level as as they lay the foundation for the other, more complex components that they live within.

### Atoms
[Buttons](/components/detail/buttons) and [form elements](/components/detail/inputs) are the most simplisitic of 'components' and these are classed as atoms to convey the level of complexity.  Mostly they require very simple markup in order to use and are often implemented as part of the larger 'molecular' level Components.

### Components
Components are more complex UI pieces like [forms](/components/detail/form) and [tabs](/components/detail/tabs) that require more markup and often have stronger UI semantics which creates distinction between them and other components.

### Templates
Templates like the [content page](/components/detail/content-page-default) are examples of how components and atoms can be combined to create whole page templates using the Bootstrap grid and base styles.

---

## Distributed code

### HTML
All UI structure uses HTML. As it is, this makes is usable across multiple browsers and devices as a website, web app or hybrid mobile application. To use a template, simply find the component within this site and copy the code from the HTML tab.

### CSS
BEM classes is used to structure CSS and ensure stlyes are encapsulated as UI components where possible

Context classes are used to contain components and other elements and give them contextual meaning on a wider template basis

State classes are used to convey transient component states primarly centred around user interactions.

Base styles includes general typographic treatment and comes with the Bootstrap 4 grid.

#### Use bundled CSS
```
<link rel="stylesheet" type="text/css" href="http://catchify.catchdigital.com/css/styles.css">
```

### JavaScript
Data attributes are used to attach behaviours to components to allow users to simply load the bundle and add behaviours without writing extra JavaScript.

#### Use bundled JS
```
<script type="text/javascript" src="http://cathify.catchdigital.com/js/bundle.js"></script>
```

jQuery has been used and is required along with the bundles.

```
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"
></script>
```
