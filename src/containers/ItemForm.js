// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { updateItemFormData } from '../actions/itemForm';
// import { createItem } from '../actions/items';
//
// class ItemForm extends Component {
//
//   handleOnChange = event => {
//     const { name, value } = event.target;
//     const currentItemFormData = Object.assign({}, this.props.itemFormData, {
//       [name]: value
//     })
//     this.props.updateItemFormData(currentItemFormData)
//   }
//
//   handleOnSubmit = event => {
//     event.preventDefault()
//     this.props.createItem(this.props.itemFormData)
//   }
//
//   render() {
//     const { name, price, img_url, likes_count } = this.props.itemFormData
//     return (
//       <div>
//         Add plants to Inventory:
//         <form onSubmit={this.handleOnSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               onChange={this.handleOnChange}
//               name="name"
//               value={name}
//             />
//           </div>
//
//           <div>
//             <label htmlFor="price">Price:</label>
//             <input
//               type="number"
//               onChange={this.handleOnChange}
//               name="price"
//               value={price}
//             />
//           </div>
//
//           <div>
//             <label htmlFor="image">Image Url:</label>
//             <input
//               type="text"
//               onChange={this.handleOnChange}
//               name="img_url"
//               value={img_url}
//             />
//           </div>
//
//           <div>
//             <label htmlFor="likes_count">Likes:</label>
//             <input
//               type="number"
//               onChange={this.handleOnChange}
//               name="likes_count"
//               value={likes_count}
//             />
//           </div>
//           <button type="submit">Add plant</button>
//         </form>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return ({
//     itemFormData: state.itemFormData
//   })
// }
//
// export default connect(mapStateToProps, { updateItemFormData, createItem })(ItemForm);
