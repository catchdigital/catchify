/**
 * Helper module for querying the current break point.
 *
 * Rather than returning a width, or indeed relying on one, we use visibility
 * helper classes to tie into how the breakpoints are calculated with media queries.
 *
 * This is important as it ensures consistency when adding JS functionality at
 * a certain breakpoint
 */

/**
 * These are the default used to setup this helper module
 * @type {Object}
 */
const defaultOptions = {
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
};

const breakpoint = {
  /**
   * Sets up the breakpoint helper, implementing flag elements into the DOM
   * @param  {Object}   options
   */
  init(options = {}) {
    // Combine user given options with defaults
    this.options = Object.assign(defaultOptions, options);

    // For every given breakpoints create a helper flag element
    this.options.breakpoints.forEach((size) => {
      const $element = $(this.options.template);

      // Setup element properties
      $element.css(this.options.styles);
      $element.attr('class', this.options.classPrefix + size);
      $element.attr(this.options.dataAttrSelector, size);

      // Add element to body
      $('body').append($element);
    });
  },

  /**
   * Returns the current breakpoint in range of options.breakpoints
   * @return {String}
   */
  get() {
    return $(`[${this.options.dataAttrSelector}]:visible:last`)
             .attr(this.options.dataAttrSelector);
  },

  /**
   * Checks if the breakpoint is the same as that given
   * @param  {String}  size
   * @return {Boolean}
   */
  is(size) {
    return this.get() === size;
  },

  /**
   * Checks if the breakpoint is not the same as that given
   * @param  {String}  size
   * @return {Boolean}
   */
  not(size) {
    return !this.is(size);
  },

  /**
   * Provides an interface for reacting to breakpoint changes using a
   * deferred resize event and a checkt to see if the breakpoint has changed
   *
   * @param  {Function} resized
   */
  onChange(resized) {
    resized(this.get());

    $(window).resize(() => {
      this.changeTimeoutId = setTimeout(() => {
        clearTimeout(this.changeTimeoutId);

        if (this.lastCalculatedSize !== this.get()) {
          this.lastCalculatedSize = this.get();

          resized(this.lastCalculatedSize);
        }
      }, this.options.resizeTimeout);
    });
  },
};

export default breakpoint;
