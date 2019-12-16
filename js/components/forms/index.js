import {
    Forms,
    Select,
    Dropdown,
    Modal,
    Datepicker,
    Timepicker
} from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  // Init select box
  const selects = document.querySelectorAll('select');
  const selectInstances = M.FormSelect.init(selects, {});

  // Init datepicker
  // The format has been set up following Drupal time field standards.
  // TODO: Create a fallback which takes the value from the field data attrs.
  const datepickers = document.querySelectorAll('.datepicker');
  const datepikerInstances = M.Datepicker.init(datepickers, {'format': 'yyyy-m-d'});

  // Init timepicker
  // Twelve hours type isn't supported by Drupal..
  // TODO: Create a fallback function that convert the value to requirements.
  const timepickers = document.querySelectorAll('.timepicker');
  const timepickerInstances = M.Timepicker.init(timepickers, {'twelveHour': false});
});
