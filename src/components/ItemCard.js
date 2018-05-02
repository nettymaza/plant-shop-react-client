// Presentational 'simple' component
import React from 'react';

const ItemCard = ({ item }) => (
  <div key={item.id} className="ItemCard">
    <h3>{item.name}</h3>
    <h4>Price: ${item.price}</h4>
    <h4>Likes: {item.likes_count}</h4>
    <img className="PlantImage" src={item.img_url} alt={item.name} />
  </div>
)

export default ItemCard;
