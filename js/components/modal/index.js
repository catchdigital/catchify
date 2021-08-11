import { Modal } from '@materializecss/materialize';

document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelectorAll('.modal');
  const instance = M.Modal.init(el, {});
  // Displatch loaded event
  const event = new CustomEvent('CatchifyModalsLoaded');
  document.dispatchEvent(event);
});
