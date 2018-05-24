import React from 'react';
import { connect } from 'react-redux';
// import { addLike } from '../actions/items';

const DetailPage = ({ item })=> {
  return (
    <div className="ItemCard">
      <h3>{item.name}</h3>
      <p>{item.info}</p>
      <img src={item.img_url} alt={item.name}/>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const item = state.items.find(item => item.id === +ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

export default connect(mapStateToProps)(DetailPage);


// <button onClick={addLike}>Likes: {item.likes_count}</button>
