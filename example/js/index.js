// Please note that jQuery is very much a global dependency
// ===
import catchify from 'catchify';

// Expose jQuery as $
const $ = window.jQuery;

// Setup some useful jQuery selectors
const $window = $(window);
const $body = $('body');

// Log the current breakpoint on change or init
$window.on('breakpointChange breakpointInit', (e, data) =>
  console.log(data.breakpoint)
);

// Initialise breakpoint
catchify.breakpoint.init();
