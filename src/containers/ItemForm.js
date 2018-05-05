import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItemFormData } from '../actions/itemForm';
import { createItem } from '../actions/items';
import './Items.css';

class ItemForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentItemFormData = Object.assign({}, this.props.itemFormData, {
      [name]: value
    })
    this.props.updateItemFormData(currentItemFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createItem(this.props.itemFormData)
  }

  render() {
    const { name, info, img_url} = this.props.itemFormData
    return (

      <div className="FormDiv">
        <h3>Add a New Plant:</h3>
        <form onSubmit={this.handleOnSubmit}>

          <div className="FormInput">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>

          <div className="FormInput">
            <label htmlFor="image">Image Url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>

          <div className="FormInput">
            <label htmlFor="name">Plant Info:</label>
            <input
              onChange={this.handleOnChange}
              name="info"
              value={info}
            />
          </div>

          <button type="submit">Add plant</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return ({
    itemFormData: state.itemFormData
  })
}

export default connect(mapStateToProps, { updateItemFormData, createItem })(ItemForm);
