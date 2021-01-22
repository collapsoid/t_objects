import React from 'react';

import './HideButton.css';

import arrowsUpSvg from '../../../assets/icons/angle-double-up-solid.svg';
import arrowsDownSvg from '../../../assets/icons/angle-double-down-solid.svg';

export default function HideButton({isVisible}) {
  return (
    <div className="hide-btn">
      <span className="hide-btn__text">{isVisible ? 'свернуть' : 'развернуть'}</span>
      <img className="hide-btn__ico" src={isVisible ? arrowsUpSvg : arrowsDownSvg} alt="hide/unhide" />
    </div>
  );
}