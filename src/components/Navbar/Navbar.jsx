import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="header-navbar">
      <ul className="header-navbar__list">
        <li className="header-navbar__item">
          <a href="#">Главная</a>
        </li>
        <li className="header-navbar__item header-navbar__item_active">
          <a href="#">Параметры</a>
        </li>
        <li className="header-navbar__item">
          <a href="#">Управление расчетом</a>
        </li>
        <li className="header-navbar__item">
          <a href="#">Результат</a>
        </li>
        <li className="header-navbar__item">
          <a href="#">Визуализация</a>
        </li>
        <li className="header-navbar__item">
          <a href="#">Графики</a>
        </li>
      </ul>
    </nav>
  );
}