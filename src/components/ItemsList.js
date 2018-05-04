import React from 'react';
import { Link } from 'react-router-dom';

const ItemsList = ({ items }) => {
  const renderItems = items.map(item =>
    <Link key={item.id} to={`/items/${item.id}`}>
     <div className="ItemCard">
       <h3>{item.name}</h3>
       <h4>Price: ${item.price}</h4>
       <h4>Likes: {item.likes_count}</h4>
       <img className="PlantImage" src={item.img_url} alt={item.name} />
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
