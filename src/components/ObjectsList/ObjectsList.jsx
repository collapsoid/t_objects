import React from 'react';
import {connect} from 'react-redux';

import './ObjectsList.css';

import {targetObjectsTemplate} from '../../utils';
import {createTargetObjects, reviewTargetObjects} from '../../store/actions';

import ObjectsListItem from './ObjectsListItem/ObjectsListItem';


function ObjectsList({targetObjects, currentTargetObjects, createTargetObjects, reviewTargetObjects, state, setState}) {
  const addObjects = () => {
    createTargetObjects(targetObjectsTemplate);
    setState('creation');
  };

  const reviewObjects = objects => () => {
    reviewTargetObjects(objects, targetObjectsTemplate);
    setState('review');
  };

  return (
    <div className="objects-list">
      <ul className="objects-list__list">
        {targetObjects.map(el => <li className={`objects-list__item ${state === 'review' && currentTargetObjects?.current?.id === el.id ? 'objects-list__item_selected' : ''}`}
                                      key={el.id}
                                      onClick={reviewObjects(el)}>
                                      <ObjectsListItem title={el.title} objectsQuantity={el.objectsQuantity} />
                                  </li>)}
      </ul>
      <div className="objects-list__add-objects">
        <button className="objects-list__add-objects-btn" onClick={addObjects}>ДОБАВИТЬ ОБЪЕКТЫ</button>
      </div>
    </div>
  );
}

const mapState = ({targetObjects, currentTargetObjects}) => ({
  targetObjects,
  currentTargetObjects
});

export default connect(mapState, {createTargetObjects, reviewTargetObjects})(ObjectsList);