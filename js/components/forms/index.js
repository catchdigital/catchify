import {
    Forms,
    Select,
    Dropdown
} from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  const instances = M.FormSelect.init(elems, {});
});
