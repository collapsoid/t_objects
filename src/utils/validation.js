export function validateForm(form) {
  const invalidFields = [];

  for (let element of form.getElementsByTagName('input')) {
    if (!isFieldValid(element)) {
      invalidFields.push(element);
    }
  }

  return invalidFields;
}

export function isFieldValid(field) {
  const isNumber = field.dataset.type === 'value';

  if (!field.validity.valid) {
    return false;
  } else if (isNumber) {
    const value = parseFloat(+field.value);
    const isFloat = field.dataset.float === 'true';
    const isMin = field.min !== '';
    const isMax = field.max !== '';

    if (isNaN(value) || (isMin && value < +field.min) || (isMax && value > +field.max) || (!isFloat && !Number.isInteger(value))) {
      return false;
    }
  }

  return true;
}