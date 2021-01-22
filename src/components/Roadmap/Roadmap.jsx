import React from 'react';

import './Roadmap.css';

export default function Roadmap() {
  return (
    <div className="header-roadmap">
      <ul className="header-roadmap__list">
        <li className="header-roadmap__item">
          <span className="header-roadmap__number">1</span>
          <span className="header-roadmap__title">Параметры задачи</span>
        </li>
        <li className="header-roadmap__item header-roadmap__item_active">
          <span className="header-roadmap__number">2</span>
          <span className="header-roadmap__title">Целевые объекты</span>
        </li>
        <li className="header-roadmap__item">
          <span className="header-roadmap__number">3</span>
          <span className="header-roadmap__title">Наблюдатели</span>
        </li>
        <li className="header-roadmap__item">
          <span className="header-roadmap__number">4</span>
          <span className="header-roadmap__title">Космические аппараты</span>
        </li>
        <li className="header-roadmap__item">
          <span className="header-roadmap__number">5</span>
          <span className="header-roadmap__title">Наземные станции</span>
        </li>
        <li className="header-roadmap__item">
          <span className="header-roadmap__number">6</span>
          <span className="header-roadmap__title">Параметры качества</span>
        </li>
      </ul>
    </div>
  );
}