import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './ObjectsReviewPanel.css';

import {editTargetObjects, deleteTargetObjects, reviewTargetObjects} from '../../store/actions';
import {validateForm, getInputFieldValue} from '../../utils';

import ObjectsFormField from '../ObjectsFormField/ObjectsFormField';
import ObjectsCounter from '../ObjectsCounter/ObjectsCounter';


const ObjectsReviewPanel = ({currentTargetObjects, editTargetObjects, deleteTargetObjects, setState}) => {
  const formRef = useRef(null);
  const planesRef = useRef(null);
  const objectsOnPlaneRef = useRef(null);
  const [objectsQuantity, setObjectsQuantity] = useState(0);
  const [inEdition, setInEdition] = useState(false);

  const calculateObjectsQuantity = () => setObjectsQuantity(+planesRef.current.value * +objectsOnPlaneRef.current.value);
  const editObjects = () => setInEdition(true);
  const deleteObjects = () => {
    deleteTargetObjects(currentTargetObjects.current.id);
    setState(null);
  };

  useEffect(() => {
    for (let element of formRef.current.getElementsByTagName('input')) {
      element.value = currentTargetObjects.current[element.name];
      element.disabled = true;
    }

    setInEdition(false);
  }, [currentTargetObjects]);

  useEffect(() => {
    if (inEdition) {
      for (let element of formRef.current.getElementsByTagName('input')) {
        if (!element.dataset.not_editable) {
          element.disabled = false;
        }
      }
    }
  }, [inEdition]);

  const submitHandler = e => {
    e.preventDefault();

    const objectsParameters = {
      objectsQuantity: objectsQuantity || currentTargetObjects.current.objectsQuantity
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

    editTargetObjects(objectsParameters, currentTargetObjects.current.id);
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
    <section className="objects-review-panel">
      <header className="objects-review-panel__header">
      <span className="objects-review-panel__title">Регулярная группа целевых объектов</span>
        <div className="objects-review-panel__buttons">
          {!inEdition && <button className="objects-review-panel__edit-btn pseudo-btn" onClick={editObjects}>РЕДАКТИРОВАТЬ</button>}
          <button className="objects-review-panel__delete-btn pseudo-btn" onClick={deleteObjects}>УДАЛИТЬ</button>
        </div>
      </header>
      <form className="objects-review-panel__form" ref={formRef} noValidate>
        <div className="objects-review-panel__object-name object-name">
          <ObjectsFormField label="ЗАДАЙТЕ НАЗВАНИЕ ОБЪЕКТА" name="title" type="text" data-type="text" placeholder="Название объекта" error="Введите название объекта" required />
        </div>

        {generateForm(currentTargetObjects.template, fieldProps)}

        {inEdition &&
          <div className="objects-review-panel__summary">
            <button className="objects-review-panel__create-group-btn form-btn" type="submit" onClick={submitHandler}>СОХРАНИТЬ</button>
            <div className="objects-review-panel__total-quantity">
              <ObjectsCounter count={objectsQuantity} />
            </div>
          </div>
        }
      </form>
    </section>
  );
};

const mapState = ({currentTargetObjects}) => ({currentTargetObjects});

export default connect(mapState, {editTargetObjects, deleteTargetObjects, reviewTargetObjects})(ObjectsReviewPanel);

const generateForm = (template, fieldsProps = {}) => {
  let i = 0;

  return template.map(group => (
    <div key={i++} className="objects-review-panel__field-group field-group">
      {group.items.map(({input, label, error}) => <ObjectsFormField key={i++} label={label} error={error} {...input} {...fieldsProps[input.name]} />)}
    </div>
  ));
};