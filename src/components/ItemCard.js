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
      <li>
        {this.props.item.name}
        <button onClick={() => this.increaseLike()}>Likes: {this.state.likes}</button>
      </li>
    );
  }
}

export default ItemCard;
