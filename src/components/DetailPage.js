import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/items';

class DetailPage extends Component {

  handleLikes = () => {
    this.props.addLike(this.props.item.id)
  }

  render() {
    return(
      <div className="ItemCard">
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.info}</p>
      <img src={this.props.item.img_url} alt={this.props.item.name}/>
      <button onClick={this.handleLikes}>Likes: {this.props.item.likes_count}</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const item = state.items.find(item => item.id === +ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

export default connect(mapStateToProps, { addLike})(DetailPage);


// <button onClick={addLike}>Likes: {this.props.item.likes_count}</button>
