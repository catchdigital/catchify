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
  template: 'span',
  // CSS properties appled to each element
  styles: `position: absolute; left: 0; bottom: 0; width: 1px; height: 1px;`,
  // Combines with sizes to create (prefix + size)
  classPrefix: 'visible-',
  // The different sizes to create elements for
  // Should map to breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  // The breakpoint attribute used to query visible element flag
  dataAttrSelector: 'data-catchify-breakpoint',
  // An event to fire when the breakpoint initialises
  breakpointInitEvent: 'breakpointInit',
  // An event to fire when the breakpoint changes
  breakpointChangeEvent: 'breakpointChange',
};

const breakpoint = {
  /**
   * Sets up the breakpoint helper, implementing flag elements into the DOM
   * @param  {Object}   options
   */
  init(options = {}) {
    let changeTimeoutId;
    let lastCalculatedSize;
    // Combine user given options with defaults
    this.options = {
      ...defaultOptions,
      ...options,
    };

    // For every given breakpoints create a helper flag element
    this.options.breakpoints.forEach(size => {
      const $element = document.createElement(this.options.template);

      // Setup element properties
      $element.setAttribute('style', this.options.styles);
      $element.setAttribute('class', this.options.classPrefix + size);
      $element.setAttribute(this.options.dataAttrSelector, size);

      // Add element to body
      document.querySelector('body').appendChild($element);
    });

    // Trigger init event
    const event = new CustomEvent(this.options.breakpointInitEvent, {
      detail: { breakpoint: this.get() },
      bubbles: true,
    });

    document.dispatchEvent(event);

    // Watch for resizes
    window.addEventListener('resize', () => {
      clearTimeout(changeTimeoutId);

      changeTimeoutId = setTimeout(() => {
        if (lastCalculatedSize !== this.get()) {
          lastCalculatedSize = this.get();

          const event = new CustomEvent(this.options.breakpointChangeEvent, {
            detail: { breakpoint: lastCalculatedSize },
            bubbles: true,
          });

          document.dispatchEvent(event);
        }
      }, this.options.resizeTimeout);
    });
  },

  /**
   * Returns the current breakpoint in range of options.breakpoints
   * @return {String}
   */
  get() {
    const $element = document.querySelectorAll(
      `[${this.options.dataAttrSelector}]`,
    );
    let breakpoint = '';
    $element.forEach(element => {
      if (element.offsetWidth > 0 && element.offsetHeight > 0) {
        breakpoint = element.getAttribute(this.options.dataAttrSelector);
      }
    });
    return breakpoint;
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
};

export default breakpoint;
