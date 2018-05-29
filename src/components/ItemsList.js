import React from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';
import { addLike } from '../actions/items'

const ItemsList = ({ items, addLike, totalLikes }) => {


const filteredItems = items.filter( item => item.likes_count > 20)
const sortedItems = filteredItems.sort(function(a, b) {
  return(b.likes_count - a.likes_count)
})

  const renderItems = filteredItems.map(item =>
      <div className="ItemList">
        <h3>{item.name}</h3>
        <h4>{item.likes_count}</h4>
        <button onClick={() => addLike(item.id)}>Like</button>
      </div>
  );

  return (
    <div>
      <h1>Total Likes: {totalLikes}</h1>
      {renderItems}
    </div>
  );
};

const mapStateToProps = state => {
  const totalLikes = state.items.reduce((accum, item) => {
    return item.likes_count + accum
  }, 0)
  return {
    totalLikes: totalLikes
  }
}

export default connect(mapStateToProps, {addLike})(ItemsList);
