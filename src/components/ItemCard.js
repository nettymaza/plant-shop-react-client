import React, { Component } from 'react';

class ItemCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        likes: 0
      }
  }

  increaseLike = () => {
    this.setState({
      likes: this.state.likes += 1
    })
  }

  render() {
    return(
      <button onClick={() => this.increaseLike()}>Likes: {this.state.likes}</button>
    );
  }
}

export default ItemCard;
