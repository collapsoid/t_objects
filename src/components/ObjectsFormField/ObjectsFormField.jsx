import React from 'react';

import './ObjectsFormField.css';
import calendarSvg from '../../assets/icons/calendar-alt-solid.svg';

const ObjectsFormField = React.forwardRef(({label, error, ...attributes}, ref) => {
  const pickImage = () => {
    switch (attributes['data-img']) {
      case 'date':
        return calendarSvg;
    }
  };

  return (
    <div className="objects-form-field">
      <label className="objects-form-field__label">{label}</label>
      <div className="objects-form-field__container">
        <input className="objects-form-field__input" ref={ref} {...attributes} />
        {attributes['data-img'] && <img className="objects-form-field__img" src={pickImage()} alt={attributes['data-img']} />}
        <span className="objects-form-field__error">{error}</span>
      </div>
    </div>
  );
})

export default ObjectsFormField;
