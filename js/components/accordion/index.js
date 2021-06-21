import { breakpoint } from "../..";

const ATTR = {
  ACCORDION: 'data-accordion',
  TRIGGER: 'data-accordion-trigger',
};

const SELECTOR = {
  ACCORDION: `[${ATTR.ACCORDION}]`,
  TRIGGER: `[${ATTR.TRIGGER}]`,
};

const CLASS = {
  MOBILE_ONLY: 'accordion--mobile-only',
  IS_OPEN: 'is-open',
};

const KEYS = {
  KEY_ENTER: 13,
  KEY_SPACE: 32,
};

document.addEventListener('DOMContentLoaded', function() {
  breakpoint.init();

  const isMobile = () => {
    return ['xs', 'sm'].indexOf(breakpoint.get()) > -1;
  };

  const $trigger = document.querySelectorAll(SELECTOR.TRIGGER);

  const toggleDrawer = ($element) => {
    $element.classList.toggle(CLASS.IS_OPEN);
    if ($element.classList.contains(CLASS.IS_OPEN)) {
      $element
        .querySelectorAll('.accordion__content [tabindex="-1"]')
        .forEach((el) => {
          el.setAttribute('tabindex', '0');
        });
    } else {
      $element
        .querySelectorAll('.accordion__content [tabindex="0"]')
        .forEach((el) => {
          el.setAttribute('tabindex', '-1');
        });
    }
  };

  const handleButtonKeypress = (e) => {
    const $element = e.target.closest(SELECTOR.ACCORDION);
    switch (e.which) {
      case KEYS.KEY_SPACE:
      case KEYS.KEY_ENTER: {
        if ($element.classList.contains(CLASS.MOBILE_ONLY)) {
          if (isMobile()) {
            e.stopPropagation();
            e.preventDefault();
            toggleDrawer($element);
          }
        } else {
          e.stopPropagation();
          e.preventDefault();
          toggleDrawer($element);
        }
        break;
      }
    } //end switch
    return true;
  };

  const handleButtonClick = (e) => {
    const $element = e.target.closest(SELECTOR.ACCORDION);
    $element.querySelector(SELECTOR.TRIGGER).blur();

    if ($element.classList.contains(CLASS.MOBILE_ONLY)) {
      if (isMobile()) {
        e.stopPropagation();
        e.preventDefault();
        toggleDrawer($element);
      }
    } else {
      e.stopPropagation();
      e.preventDefault();
      toggleDrawer($element);
    }
  };

  $trigger.forEach((el) => {
    if (!isMobile()) {
      const $element = el.closest(SELECTOR.ACCORDION);

      if ($element.classList.contains(CLASS.MOBILE_ONLY)) {
        el.setAttribute('tabindex', '-1');
        $element
        .querySelectorAll('.accordion__content [tabindex="-1"]')
        .forEach((el) => {
          el.setAttribute('tabindex', '0');
        });
      }
    }
    el.addEventListener('click', handleButtonClick);
    el.addEventListener('keypress', handleButtonKeypress);
  });
});
