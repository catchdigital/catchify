import breakpoint from './lib/breakpoint';

(function index($) {
  // Bind jQuery to $ global
  window.$ = $;

  // Test screen size helper
  breakpoint.init();

  // Outputs screen size to element
  breakpoint.onChange((newSize) => {
    $('[data-breakpoint-output]').text(newSize);
  });
}(jQuery));
