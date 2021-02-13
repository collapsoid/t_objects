import React from 'react';

import './ObjectsCounter.css';
import excSvg from '../../assets/icons/exclamation-circle-solid.svg';

export default function ObjectsCounter({count}) {
  return (
    <div className="objects-counter">
      <img className="objects-counter__ico" src={excSvg} alt="exclamation" />
      <span className="objects-counter__text">Будет создано {count} объектов</span>
    </div>
  );
}