export class FormValidator {
  validateForm(form) {
    if (!form || form.tagName !== 'FORM') {
      throw new Error('validateForm method can only take a <form> element reference');
    }

    const invalidFields = [];
  
    for (let element of form.getElementsByTagName('input')) {
      if (!this.#isFieldValid(element)) {
        invalidFields.push(element);
      }
    }
  
    return invalidFields;
  }

  #isFieldValid(field) {
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
}
