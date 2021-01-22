import React from 'react';

import './Timer.css';
import clockSvg from '../../assets/icons/clock-regular.svg';

export default function Timer() {
  return (
    <div className="header-timer">
      5 минут назад
      <img className="header-timer__ico" src={clockSvg} alt="timer" />
    </div>
  );
}