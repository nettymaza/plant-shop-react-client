import React from 'react';
import './Items.css'

const Items = (props) => (
  <div className="PlantsContainer">
    <h2>Plants</h2>
    {props.items.map(item =>
      <div key={item.id} className="ItemCard">
        <h3>{item.name}</h3>
        <h4>Price: ${item.price}</h4>
        <img className="PlantImage" src={item.img_url} alt={item.name} />
        <h4>Likes: {item.likes}</h4>
      </div>
    )}
  </div>
);

export default Items;
