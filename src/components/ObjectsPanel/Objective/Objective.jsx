import React from 'react';

import './Objective.css';
import infoSvg from '../../../assets/icons/question-circle-regular.svg';

export default function Objective({title}) {
  return (
    <div className="objective">
      <span className="objective__title">{title}</span>
      <img className="objective__ico" src={infoSvg} alt="info" />
    </div>
  );
}