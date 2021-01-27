import React, {useState} from 'react';
import {connect} from 'react-redux';

import './ObjectsPanel.css';

import Objective from './Objective/Objective';
import HideButton from './HideButton/HideButton';
import ObjectsList from '../ObjectsList/ObjectsList';
import ObjectsCreationPanel from '../ObjectsCreationPanel/ObjectsCreationPanel';
import ObjectsReviewPanel from '../ObjectsReviewPanel/ObjectsReviewPanel';


const ObjectsPanel = ({currentTargetObjects}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [editorState, setEditorState] = useState(null);

  return (
    <div className="objects-panel">
      <div className="objects-panel__header-container">
        <div className="objects-panel__objective">
          <Objective title="ДОБАВЬТЕ ЦЕЛЕВЫЕ ОБЪЕКТЫ И ОПРЕДЕЛИТЕ ИХ ПАРАМЕТРЫ" />
        </div>
        <div className="objects-panel__hide pseudo-btn" onClick={() => setIsVisible(!isVisible)}>
          <HideButton isVisible={isVisible} />
        </div>
      </div>
      {isVisible &&
        <div className="objects-panel__content-container">
          <div className="objects-panel__objects-list">
            <ObjectsList state={editorState} setState={setEditorState} />
          </div>
          {editorState &&
            <div className="objects-panel__objects-editor">
              {editorState === 'creation' && <ObjectsCreationPanel setEditorState={setEditorState} {...currentTargetObjects} />}
              {editorState === 'review' && <ObjectsReviewPanel setEditorState={setEditorState} {...currentTargetObjects} />}
            </div>
          }
        </div>
      }
    </div>
  );
};

const mapState = ({currentTargetObjects}) => ({currentTargetObjects});

export default connect(mapState)(ObjectsPanel);