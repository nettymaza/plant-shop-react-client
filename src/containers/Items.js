import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemCard from '../components/ItemCard';
import ItemForm from './ItemForm';
import { getItems } from '../actions/items';
import './Items.css';

class Items extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    return (
      <div className="PlantsContainer">
        <h2>Todays Plants</h2>
        {this.props.items.map(item => < ItemCard key={item.id} item={item} />)}

      </div>
    );
  }
}
// Include this on line 20
// <ItemForm />

const mapStateToProps = (state) => {
  return ({
    items: state.items
  })
}

export default connect(mapStateToProps, { getItems })(Items);
