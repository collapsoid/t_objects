import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './ObjectsReviewPanel.css';

import {FormProcessor} from '../../utils';
import {editTargetObjects, deleteTargetObjects, reviewTargetObjects} from '../../store/actions';

import {withForm} from '../HOC';
import ObjectsCounter from '../ObjectsCounter/ObjectsCounter';


const ObjectsReviewPanel = withForm(({formRef, children, currentTargetObjects, editTargetObjects, deleteTargetObjects, setEditorState}) => {
  const planesRef = useRef(null);
  const objectsOnPlaneRef = useRef(null);
  const [objectsQuantity, setObjectsQuantity] = useState(0);
  const [inEdition, setInEdition] = useState(false);
  const formProcessor = new FormProcessor();

  const calculateObjectsQuantity = () => {
    setObjectsQuantity(+planesRef.current.value * +objectsOnPlaneRef.current.value);
  };
  const editObjects = () => setInEdition(true);
  const deleteObjects = () => {
    deleteTargetObjects(currentTargetObjects.current.id);
    setEditorState(null);
  };

  useEffect(() => {
    for (let field of formRef.current.getElementsByTagName('input')) {
      field.value = currentTargetObjects.current[field.name];
      field.disabled = true;
    }

    setInEdition(false);
  }, [currentTargetObjects]);

  useEffect(() => {
    if (inEdition) {
      for (let field of formRef.current.getElementsByTagName('input')) {
        if (!field.dataset.not_editable) {
          field.disabled = false;
        }
      }
    }
  }, [inEdition]);

  const submitHandler = () => {
    formRef.current.requestSubmit();

    if (!formRef.current.formValid) {
      return;
    }

    const objectsParameters = {
      ...formProcessor.collectFormFieldsValue(formRef.current),
      objectsQuantity: objectsQuantity || currentTargetObjects.current.objectsQuantity
    };

    editTargetObjects(objectsParameters, currentTargetObjects.current.id);
    setEditorState(null);
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

      {children(currentTargetObjects.template, fieldProps)}

      {inEdition &&
        <div className="objects-review-panel__summary">
          <button className="objects-review-panel__create-group-btn form-btn" type="submit" onClick={submitHandler}>СОХРАНИТЬ</button>
          <div className="objects-review-panel__total-quantity">
            <ObjectsCounter count={objectsQuantity} />
          </div>
        </div>
      }
    </section>
  );
});

const mapState = ({currentTargetObjects}) => ({currentTargetObjects});

export default connect(mapState, {editTargetObjects, deleteTargetObjects, reviewTargetObjects})(ObjectsReviewPanel);
