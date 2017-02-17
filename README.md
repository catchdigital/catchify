# Catchify

![Build Status](https://travis-ci.org/catchdigital/catchify.svg?branch=master)

A collection of front end files to kickstart projects.

...currently just SASS.

## Installation
`npm install catchdigital/catchify --save`

## Sass Setup

Recommended Project SASS Directory Structure:
```
/sass/includes
/sass/base
/sass/components

/sass/styles.scss
```

### Import SCSS files
:bulb: Remember to replace `__NODE_MODULES_DIR__` to the actual relative path in your project

```sass
// Catchify Includes (variables, mixins etc)
@import '__NODE_MODULES_DIR__/catchify/sass/includes/includes';
// Project Includes
@import 'includes/includes';

// Catchify Base (grid, scaffolding and other global CSS)
@import '__NODE_MODULES_DIR__/catchify/sass/includes/base';
// Project Base
@import 'includes/base';

// Project Components (reusable BEM components)
@import 'components/components';

// Catchify Helpers (override classes that act as the 'glue' etc)
@import '__NODE_MODULES_DIR__/catchify/sass/includes/base/helpers';
// Project Helpers
@import 'includes/base/helpers';
```
