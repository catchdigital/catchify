import {
  Forms,
  Select,
  Dropdown,
  Modal,
  Datepicker,
  Timepicker
} from '@materializecss/materialize';

document.addEventListener('DOMContentLoaded', function() {
  // Init select box
  const selectFields = document.querySelectorAll('select');
  selectFields.forEach(selectField => {
    M.FormSelect.init(selectField, {});
    selectField.addEventListener('change.initMaterialSelect', () => {
      M.FormSelect.init(selectField, {});
    });
  });

  // Init dropdown
  const dropdowns = document.querySelectorAll('.dropdown-trigger');
  const dropdownInstances = M.Dropdown.init(dropdowns, {});

  // Init datepicker
  // The format has been set up following Drupal time field standards.
  // TODO: Create a fallback which takes the value from the field data attrs.
  const datepickers = document.querySelectorAll('.datepicker');
  const datepickerInstances = M.Datepicker.init(datepickers, {'format': 'yyyy-m-d'});

  // Tab onto input and open date picker modal
  datepickerInstances.forEach(function(instance){
    const element = instance.$el[0]
    element.addEventListener('focus', function(){
      instance.open();
    });
  })
  

  // Init timepicker
  // Twelve hours type isn't supported by Drupal..
  // TODO: Create a fallback function that convert the value to requirements.
  const timepickers = document.querySelectorAll('.timepicker');
  const timepickerInstances = M.Timepicker.init(timepickers, {'twelveHour': false});

  // Displatch loaded event
  const event = new CustomEvent('CatchifyFormsLoaded');
  document.dispatchEvent(event);
});
