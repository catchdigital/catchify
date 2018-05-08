import { breakpoint } from '../../';

/**
 * Set of tests to check the basic API for the breakpoint module
 */
describe('Breakpoint module.', () => {
  // Remove breakpoints after every test
  afterEach(() => {
    $(`[${breakpoint.options.dataAttrSelector}]`).remove();
  });

  describe('Breakpoint initialisation.', () => {
    it('Should initialise without options.', () => {
      breakpoint.init();

      expect($(`[${breakpoint.options.dataAttrSelector}]`).length).toBe(4);
    });

    it('Should initialise with options.', () => {
      breakpoint.init({
        breakpoints: ['xss'],
        dataAttrSelector: 'data-foo',
        classPrefix: 'foo-',
      });

      expect(breakpoint.options.dataAttrSelector).toBe('data-foo');
      expect($('[data-foo]').length).toBe(1);
      expect($('[data-foo]:last').attr('data-foo', 'xss'));
      expect($('[data-foo]:last').attr('class', 'foo-xss'));
    });
  });

  describe('Breakpoint methods.', () => {
    it('Should query the breakpoint accurately.', () => {
      breakpoint.init();

      expect(breakpoint.get()).toBe('lg');
      expect(breakpoint.is('lg')).toBe(true);
      expect(breakpoint.not('md')).toBe(true);
    });
  });

  describe('Breakpoint queries.', () => {
    it('Should query the lg breakpoint accurately.', () => {
      breakpoint.init();

      expect(breakpoint.get()).toBe('lg');
      expect(breakpoint.is('lg')).toBe(true);
      expect(breakpoint.not('md')).toBe(true);
    });

    it('Should query the md breakpoint accurately.', () => {
      breakpoint.init();

      // Here, we can't rely on media queries so we manually augment visibility
      $(`[${breakpoint.options.dataAttrSelector}="md"]`)
        .nextAll()
        .hide();
      expect(breakpoint.get()).toBe('md');
      expect(breakpoint.is('md')).toBe(true);
      expect(breakpoint.not('lg')).toBe(true);
    });

    it('Should query the sm breakpoint accurately.', () => {
      breakpoint.init();

      $(`[${breakpoint.options.dataAttrSelector}="sm"]`)
        .nextAll()
        .hide();
      expect(breakpoint.get()).toBe('sm');
      expect(breakpoint.is('sm')).toBe(true);
      expect(breakpoint.not('md')).toBe(true);
    });

    it('Should query the xs breakpoint accurately.', () => {
      breakpoint.init();

      $(`[${breakpoint.options.dataAttrSelector}="xs"]`)
        .nextAll()
        .hide();
      expect(breakpoint.get()).toBe('xs');
      expect(breakpoint.is('xs')).toBe(true);
      expect(breakpoint.not('sm')).toBe(true);
    });
  });
});
