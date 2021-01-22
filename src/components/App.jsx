import React from 'react';

import './App.css';

import Navbar from './Navbar/Navbar';
import Timer from './Timer/Timer';
import Roadmap from './Roadmap/Roadmap';
import ObjectsPanel from './ObjectsPanel/ObjectsPanel';

export default function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <header className="app__header app-header">
          <div className="app-header__container">
            <div className="app-header__navbar">
              <Navbar />
            </div>
            <div className="app-header__timer">
              <Timer />
            </div>
          </div>
          <div className="app-header__roadmap">
            <Roadmap />
          </div>
        </header>
        <main className="app__main app-main">
          <div className="app-main__objects-panel">
            <ObjectsPanel />
          </div>
        </main>
      </div>
    </div>
  );
}