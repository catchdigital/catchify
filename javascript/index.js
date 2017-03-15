import breakpoint from './lib/breakpoint';

(function index($) {
  // Bind jQuery to $ global
  window.$ = $;

  // Outputs screen size to element
  // Bind this first to ensure the breakpointInit event is fired
  $(window).on('breakpointChange breakpointInit', (e, data) => {
    $('[data-breakpoint-output]').text(data.breakpoint);
  });

  // Test screen size helper
  breakpoint.init();
}(jQuery));
