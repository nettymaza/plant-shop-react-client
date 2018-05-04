import React from 'react';
import { connect } from 'react-redux';

  const DetailPage = ({ item }) => (
    <div className="ItemCard">
      <h3>{item.name}</h3>
      <h4>Price: ${item.price}</h4>
      <h4>Likes: {item.likes_count}</h4>
      <img className="PlantImage" src={item.img_url} alt={item.name} />
    </div>
  )

const mapStateToProps = (state, ownProps) => {
  const item = state.items.find(item => item.id === +ownProps.match.params.itemId)

  if (item) {
    return {item}
  } else {
    return { item: {}}
  }
}

export default connect(mapStateToProps)(DetailPage);
