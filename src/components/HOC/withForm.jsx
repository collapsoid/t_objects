import React, {useRef} from 'react';

import {FormValidator} from '../../utils';

import ObjectsFormField from '../ObjectsFormField/ObjectsFormField';

export function withForm(Component) {
  return props => {
    const formRef = useRef(null);
    const formValidator = new FormValidator();
  
    const formSubmitHandler = e => {
      e.preventDefault();
  
      let invalidFields = formValidator.validateForm(formRef.current);
      for (let field of formRef.current.getElementsByTagName('input')) {
        if (invalidFields.find(el => el.name === field.name)) {
          field.classList.add('objects-form-field__input_invalid');
        } else {
          field.classList.remove('objects-form-field__input_invalid');
        }
      }

      formRef.current.formValid = invalidFields.length <= 0;
    };
    
    return (
      <Component {...props} formRef={formRef}>
        {(template, fieldProps = {}) => (
          <form ref={formRef} onSubmit={formSubmitHandler} noValidate>
            <div className="object-name">
              <ObjectsFormField
                label="ЗАДАЙТЕ НАЗВАНИЕ ОБЪЕКТА"
                name="title"
                type="text"
                data-type="text"
                placeholder="Название объекта"
                error="Введите название объекта"
                required
              />
            </div>
            {template.map((group) => (
              <div key={group.name} className="field-group">
                {group.items.map(({ input, label, error }) => (
                  <ObjectsFormField
                    key={label}
                    label={label}
                    error={error}
                    {...input}
                    {...fieldProps[input.name]}
                  />
                ))}
              </div>
            ))}
          </form>
        )}
      </Component>
    );
  };
}