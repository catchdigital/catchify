# Catchify

![Build Status](https://travis-ci.org/catchdigital/catchify.svg?branch=master)

A collection of front end files to kickstart projects.

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

```sass
// Catchify Includes (variables, mixins etc)
@import 'catchify/sass/includes/includes';
// Project Includes
@import 'includes/includes';

// Catchify Base (grid, scaffolding and other global CSS)
@import 'catchify/sass/includes/base';
// Project Base
@import 'includes/base';

// Project Components (reusable BEM components)
@import 'components/components';

// Catchify Helpers (override classes that act as the 'glue' etc)
@import 'catchify/sass/includes/base/helpers';
// Project Helpers
@import 'includes/base/helpers';
```

### Build SASS
:bulb: It's recommended that you pop these scripts in your pacakge JSON for convenience

With Catchfiy as a dependency, simply point to where you want to build the CSS (directory and file path)
```
node ./node_modules/catchify/scripts/build-css.js ./node_modules ./sass/styles.scss BUILD_DIR BUILD_CSS_FILE
```

For fast builds you can pass some extra params
```
node ./node_modules/catchify/scripts/build-css.js ./node_modules ./sass/styles.scss 'BUILD_DIR --watch --recursive' BUILD_CSS_FILE
```

## JavaScript Setup

:bulb: jQuery is a dependency unless otherwise stated...

Recommended Project SASS Directory Structure:
```
/javascript/lib/module.js
/javascript/index.js
```

### Import ES6 module files

```javascript
import catchify from 'catchify';

// Use Catchfiy.breakpoint
catchify.breakpoint.init();
```

### Build JavaScript
:bulb: It's recommended that you pop these scripts in your pacakge JSON for convenience

With Catchfiy as a dependency, simply point to where you want to build the Javascript (file path)
```
node ./node_modules/catchify/scripts/js.js ./node_modules ./javascript/index.js BUILD_JS_FILE
```
