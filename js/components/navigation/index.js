document.addEventListener('DOMContentLoaded', function() {
  const ATTR = {
    MAIN_MENU: 'data-main-menu',
    MAIN_MENU_DEVICE_TOGGLE: 'data-main-menu--device-toggle',
    MAIN_MENU_LINK: 'data-main-menu--link',
    MAIN_MENU_LINK_LEVEL: 'data-main-menu--link-level',
    MAIN_MENU_SUBMENU: 'data-main-menu--submenu',
    MAIN_MENU_SUBMENU_LEVEL: 'data-main-menu--submenu-level',
    MAIN_MENU_BACK_BUTTON: 'data-main-menu--back-button'
  };

  const SELECTOR = {
    MAIN_MENU: `[${ATTR.MAIN_MENU}]`,
    MAIN_MENU_DEVICE_TOGGLE: `[${ATTR.MAIN_MENU_DEVICE_TOGGLE}]`,
    MAIN_MENU_LINK: `[${ATTR.MAIN_MENU_LINK}]`,
    MAIN_MENU_LINK_LEVEL: `[${ATTR.MAIN_MENU_LINK_LEVEL}]`,
    MAIN_MENU_SUBMENU: `[${ATTR.MAIN_MENU_SUBMENU}]`,
    MAIN_MENU_SUBMENU_LEVEL: `[${ATTR.MAIN_MENU_SUBMENU_LEVEL}]`,
    MAIN_MENU_BACK_BUTTON: `[${ATTR.MAIN_MENU_BACK_BUTTON}]`,
  };

  const CLASSES = {
    IS_ACTIVE: 'is-active',
    HAS_SUBMENU_ACTIVE: 'shp-main-menu__sub-menu--has-submenu-active',
  }

  const checkIfItemsHaveClass = (items, classToCheck) => {
    let itemsHaveClass = false;
   items.each(function() {
     if ($(this).hasClass(classToCheck)){
        itemsHaveClass = true;
     }
   });
   return itemsHaveClass;
  }

  const resetLinksActiveState = links => {
    // Remove class for all items
    links.each(function() {
      $(this).removeClass(CLASSES.IS_ACTIVE);
    })
  }

  const resetSubMenusActiveState = subMenus => {
    // Remove class for all submenus
    subMenus.each(function() {
      $(this).removeClass(CLASSES.IS_ACTIVE).removeClass(CLASSES.HAS_SUBMENU_ACTIVE);
    })
  }

  const a11yClick = event => {
    if (event.type === 'click') {
      return true;
    } else if (event.type === 'keypress') {
      let code = event.charCode || event.keyCode;
      if (code === 32 || code === 13) {
        return true;
      }
    } else {
      return false;
    }
  };
  
  const mainMenu = $(SELECTOR.MAIN_MENU);
  const mainMenuDeviceToggle = $(SELECTOR.MAIN_MENU_DEVICE_TOGGLE);
  const mainMenuLinks = $(SELECTOR.MAIN_MENU_LINK);
  const subMenus = $(SELECTOR.MAIN_MENU_SUBMENU);
  const backButton = $(SELECTOR.MAIN_MENU_BACK_BUTTON);

  // AKA Burger Menu
  mainMenuDeviceToggle.click(function() {
    resetLinksActiveState(mainMenuLinks)
    resetSubMenusActiveState(subMenus)

    if ( mainMenu.hasClass(CLASSES.IS_ACTIVE) ) {
      console.log('has class')
      $(this).removeClass(CLASSES.IS_ACTIVE)
      mainMenu.removeClass(CLASSES.IS_ACTIVE);
      $(this).attr('aria-expanded', 'false');
    } else {
      mainMenu.addClass(CLASSES.IS_ACTIVE);
      $(this).addClass(CLASSES.IS_ACTIVE)
      $(this).attr('aria-expanded', 'true');
    }
  })

  // Inside each submenu there is a back button for mobile
  backButton.click(function(e) {
    e.stopPropagation();
    const key = $(this).attr(ATTR.MAIN_MENU_BACK_BUTTON);

    const otherLinksAtThisLevel = $(`[${ATTR.MAIN_MENU_LINK_LEVEL}='${key}']`);
    const otherSubMenusAtThisLevel = $(`[${ATTR.MAIN_MENU_SUBMENU_LEVEL}='${key}']`);

    resetLinksActiveState(otherLinksAtThisLevel)
    resetSubMenusActiveState(otherSubMenusAtThisLevel)
  })

  mainMenuLinks.each(function() {
    
    $(this).on('click keypress', function(e) {
      if (!a11yClick(e)) return;

      e.stopPropagation();

      // Are we re clicking an active link?
      const currentlyActiveLink = $(this).hasClass(CLASSES.IS_ACTIVE);

      // Get data attributes
      const key = $(this).attr(ATTR.MAIN_MENU_LINK);
      const thisLevel = $(this).attr(ATTR.MAIN_MENU_LINK_LEVEL);

      // Get elements at this level and down
      const parentMenuOfLink = $(this).closest(SELECTOR.MAIN_MENU_SUBMENU)
      const otherLinksAtThisLevel = $(`[${ATTR.MAIN_MENU_LINK_LEVEL}='${thisLevel}']`);
      const otherSubMenusAtThisLevel = $(`[${ATTR.MAIN_MENU_SUBMENU_LEVEL}='${thisLevel}']`);
      const directSubMenu = $(`[${ATTR.MAIN_MENU_SUBMENU}='${key}']`);
      const allChildLinks = $(`[${ATTR.MAIN_MENU_LINK_LEVEL}='1'], [${ATTR.MAIN_MENU_LINK_LEVEL}='2']`);
      const allChildSubMenus = $(`[${ATTR.MAIN_MENU_SUBMENU_LEVEL}='1'], [${ATTR.MAIN_MENU_SUBMENU_LEVEL}='2']`);

      resetLinksActiveState(otherLinksAtThisLevel)
      resetSubMenusActiveState(otherSubMenusAtThisLevel)

      // reset all links;
      mainMenuLinks.each(function() {
        $(this).attr('aria-expanded', 'false');
      })

      // if currently active add / remove classes

      if ( !currentlyActiveLink ) {
        $(this).attr('aria-expanded', 'true');
        $(this).addClass(CLASSES.IS_ACTIVE);
        $(directSubMenu).addClass(CLASSES.IS_ACTIVE)
      } else {
        $(this).removeClass(CLASSES.IS_ACTIVE);
        $(directSubMenu).removeClass(CLASSES.IS_ACTIVE);
      }

      // Clicking on top level main nav items
      if ( thisLevel === '0' ) {
        resetLinksActiveState(allChildLinks)
        resetSubMenusActiveState(allChildSubMenus)
      }

      // Clicking on second level items 
      if ( thisLevel === '1' ) {
        checkIfItemsHaveClass(otherLinksAtThisLevel, CLASSES.IS_ACTIVE) ? parentMenuOfLink.addClass(CLASSES.HAS_SUBMENU_ACTIVE) : parentMenuOfLink.removeClass(CLASSES.HAS_SUBMENU_ACTIVE)
      }
    });

  });
});
