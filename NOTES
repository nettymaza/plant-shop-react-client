import React from 'react';
import { Link } from 'react-router-dom';

const ItemsList = ({ items }) => {

  const renderItems = items.map(item =>
    <Link key={item.id} to={`/items/${item.id}`}>
      <div className="ItemList">
        <h3>{item.name}</h3>
      </div>
    </Link>
  );


  return (
    <div>
      {renderItems}
    </div>
  );
};

export default ItemsList;
