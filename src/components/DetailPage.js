
import React from 'react';
import { connect } from 'react-redux';
// import { addLike } from '../actions/items';

const DetailPage = ({ item })=> {
  return (
    <div className="ItemCard">
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


  // <button onClick={addLike}>Likes: {item.likes_count}</button>


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addLike } from '../actions/items';
//
// class DetailPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       likes: 0
//     }
//   }
//
//   render() {
//     return(
//       <div className="ItemCard">
//         <h3>{this.props.item.name}</h3>
//         <p>{this.props.item.info}</p>
//         <img src={this.props.item.img_url} alt={this.props.item.name}/>
//         <button onClick={addLike}>Likes: {this.props.item.likes_count}</button>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state, ownProps) => {
//   const item = state.items.find(item => item.id === +ownProps.match.params.itemId)
//
//   if (item) {
//     return { item }
//   } else {
//     return { item: {} }
//   }
// }
//
// export default connect(mapStateToProps)(DetailPage);
