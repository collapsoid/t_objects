import React from 'react';

import './ObjectsListItem.css';

export default function ObjectsListItem({title, objectsQuantity}) {  
  return (
    <div className="objects-list-item">
      <span className="objects-list-item__name">{title}</span>
      <span className="objects-list-item__quantity">{objectsQuantity}</span>
    </div>
  );
}