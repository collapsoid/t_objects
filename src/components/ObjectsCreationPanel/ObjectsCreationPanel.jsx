import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';

import './ObjectsCreationPanel.css';

import {getObjectsParameters} from '../../utils';
import {addTargetObjects} from '../../store/actions';

import {withForm} from '../HOC';
import ObjectsCounter from '../ObjectsCounter/ObjectsCounter';


const ObjectsCreationPanel = ({formRef, children, currentTargetObjects, addTargetObjects, setState}) => {
  const planesRef = useRef(null);
  const objectsOnPlaneRef = useRef(null);
  const [objectsQuantity, setObjectsQuantity] = useState(0);

  const calculateObjectsQuantity = () => {
    setObjectsQuantity(+planesRef.current.value * +objectsOnPlaneRef.current.value)
  };

  const submitHandler = () => {
    formRef.current.requestSubmit();

    if (!formRef.current.formValid) {
      return;
    }

    addTargetObjects(getObjectsParameters(formRef.current));
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
        <span className="objects-creation-panel__title">Создание регулярной группы целевых объектов</span>
      </header>

      {children(currentTargetObjects.template, fieldProps)}

      <div className="objects-creation-panel__summary">
        <button className="objects-creation-panel__create-group-btn form-btn" type="submit" onClick={submitHandler}>СОЗДАТЬ ГРУППУ ОБЪЕКТОВ</button>
        <div className="objects-creation-panel__total-quantity">
          <ObjectsCounter count={objectsQuantity} />
        </div>
      </div>
    </section>
  );
};

const mapState = ({currentTargetObjects}) => ({currentTargetObjects});

export default connect(mapState, {addTargetObjects})(withForm(ObjectsCreationPanel));