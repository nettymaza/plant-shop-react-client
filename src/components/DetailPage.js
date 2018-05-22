import React from 'react';
import { connect } from 'react-redux';

const DetailPage = ({ item })=> {

  return (
    <div className="ItemCard">
      <button onClick={this.handleDelete}> X </button>
      <h3>{item.name}</h3>
      <p>{item.info}</p>
      <img src={item.img_url} alt={item.name}/>
      <button>Likes: {item.likes_count}</button>
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
