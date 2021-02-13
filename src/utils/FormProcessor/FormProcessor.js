export class FormProcessor {
  collectFormFieldsValue = form => {
    if (!form || typeof form !== 'object' || form.tagName !== 'FORM') {
      throw new Error('collectFormFieldsValue method can only take a <form> element reference');
    }

    const collectedValue = {};
  
    for (let field of form.getElementsByTagName('input')) {
      collectedValue[field.name] = this.#getInputFieldValue(field);
    }
  
    return collectedValue;
  }

  #getInputFieldValue = field => {
    let value = null;
  
    switch (field.dataset.type) {
      case 'text':
        value = field.value;
        break;

      case 'value':
        value = field.value;
        break;

      case 'date':
        value = field.value;
        break;
    }
  
    return value;
  }
}
