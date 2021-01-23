import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';

import './ObjectsCreationPanel.css';

import {addTargetObjects} from '../../store/actions';
import {validateForm, getInputFieldValue} from '../../utils';

import ObjectsFormField from '../ObjectsFormField/ObjectsFormField';
import ObjectsCounter from '../ObjectsCounter/ObjectsCounter';


const ObjectsCreationPanel = ({currentTargetObjects, addTargetObjects, setState}) => {
  const formRef = useRef(null);
  const planesRef = useRef(null);
  const objectsOnPlaneRef = useRef(null);
  const [objectsQuantity, setObjectsQuantity] = useState(0);

  const calculateObjectsQuantity = () => {
    setObjectsQuantity(+planesRef.current.value * +objectsOnPlaneRef.current.value)
  };

  const submitHandler = e => {
    e.preventDefault();

    const objectsParameters = {
      objectsQuantity
    };
    const invalidFields = validateForm(formRef.current);

    for (let element of formRef.current.getElementsByTagName('input')) {
      if (invalidFields.find(el => el.name === element.name)) {
        element.classList.add('objects-form-field__input_invalid');
      } else {
        element.classList.remove('objects-form-field__input_invalid');
      }

      objectsParameters[element.name] = getInputFieldValue(element);      
    }

    if (invalidFields.length > 0) {
      return;
    }

    addTargetObjects(objectsParameters);
    setState(null);
  };

  const fieldProps = {
    planes: {
      ref: planesRef,
      onChange: calculateObjectsQuantity
    },
    objectsOnPlane: {
      ref: objectsOnPlaneRef,
      onChange: calculateObjectsQuantity
    }
  };
  return (
    <section className="objects-creation-panel">
      <header className="objects-creation-panel__header">
        <span className="objects-creation-panel__title">
          Создание регулярной группы целевых объектов
        </span>
      </header>
      <form className="objects-creation-panel__form" ref={formRef} noValidate>
        <div className="objects-creation-panel__object-name object-name">
          <ObjectsFormField label="ЗАДАЙТЕ НАЗВАНИЕ ОБЪЕКТА" name="title" type="text" data-type="text" placeholder="Название объекта" error="Введите название объекта" required />
        </div>

        {generateForm(currentTargetObjects.template, fieldProps)}

        <div className="objects-creation-panel__summary">
          <button className="objects-creation-panel__create-group-btn form-btn" type="submit" onClick={submitHandler}>СОЗДАТЬ ГРУППУ ОБЪЕКТОВ</button>
          <div className="objects-creation-panel__total-quantity">
            <ObjectsCounter count={objectsQuantity} />
          </div>
        </div>
      </form>
    </section>
  );
};

const mapState = ({currentTargetObjects}) => ({currentTargetObjects});

export default connect(mapState, {addTargetObjects})(ObjectsCreationPanel);

const generateForm = (template, fieldProps = {}) => {
  let i = 0;

  return template.map(group => (
    <div key={i++} className="objects-creation-panel__field-group field-group">
      {group.items.map(({input, label, error}) => <ObjectsFormField key={i++} label={label} error={error} {...input} {...fieldProps[input.name]} />)}
    </div>
  ));
};