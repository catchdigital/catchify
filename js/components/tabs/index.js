import { Tabs } from '../../lib/materialize';

document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelectorAll('.tabs');
  const instance = M.Tabs.init(el, {});
  // Displatch loaded event
  const event = new CustomEvent('CatchifyTabsLoaded');
  document.dispatchEvent(event);
});
