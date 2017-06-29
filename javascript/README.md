# Catchify JavaScript

Like the SASS, JavaScript should be genuinely useful across projects.  A module like `client-name-news-filtering.js` doesn't really fly in Catchify.  Is it a bird, is it a plane?  Nope, it doesn't fly... :boom:

## Coding Standards

Right now use the es6 [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/linters).

## Linting

Linting is with eslint, and is coupled into the `npm test` script for convenience.

## Modules

### Breakpoint
A helper which works with the breakpoints defined in the [SASS Variables](../sass/includes/_variables.scss) and the helpers defined in [Helpers](../sass/base/_helpers.scss) to allow synchronisation between screen-size specific functionality in JS and CSS :raised_hands:

#### Quick start
jQuery will need to be available globally. Simply import the module from Catchify:

```javascript
import {breakpoint} from 'catchify';

(function example($) {
  // Outputs screen size to element
  // Bind this first to ensure the breakpointInit event is fired
  $(window).on('breakpointChange breakpointInit', (e, data) => {
    console.log(data.breakpoint);
  });

  // Initialise breakpoint
  breakpoint.init();
}(jQuery));
```

#### Methods

##### Initialise breakpoint module
```javascript
breakpoint.init(settings);
```
The following settings can be overriden if desired
```javascript
{
  // Template must be encapsulated HTML
  template: '<span>',
  // CSS properties appled to each element
  styles: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '1px',
    height: '1px',
  },
  // Combines with sizes to create (prefix + size)
  classPrefix: 'visible-',
  // The different sizes to create elements for
  // Should map to breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg'],
  // The breakpoint attribute used to query visible element flag
  dataAttrSelector: 'data-catchify-breakpoint',
  // An event to fire when the breakpoint initialises
  breakpointInitEvent: 'breakpointInit',
  // An event to fire when the breakpoint changes
  breakpointChangeEvent: 'breakpointChange',
};
```

##### Get current breakpoint
Returns the current breakpoint in range of options.breakpoints.
```javascript
// Returns String
const currentBreakpoint = breakpoint.get();
```

##### Query current breakpoint
Checks if the breakpoint is the same as that given.
```javascript
// Returns Boolean
const isMobile = breakpoint.is('xs');
```

##### Query current breakpoint
Checks if the breakpoint is not the same as that given.
```javascript
// Returns Boolean
const isTabletOrBigger = breakpoint.not('xs');
```

#### Events

##### breakpointInit
Fired when the breakpoint module has finished setup
```javascript
$(window).on('breakpointInit', (e, data) {
  // Outputs value of breakpoint.get()
  console.log(data.breakpoint);
});
```

##### breakpointChange
Fired when a breakpoint has changed
```javascript
$(window).on('breakpointChange', (e, data) {
  // Outputs value of breakpoint.get()
  console.log(data.breakpoint);
});
```
