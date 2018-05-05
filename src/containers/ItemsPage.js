import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getItems } from '../actions/items';

import ItemsList from '../components/ItemsList';
import DetailPage from '../components/DetailPage';
// import ItemForm from './ItemForm';
import './Items.css';

class ItemsPage extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    const { match, items } = this.props;

    return (
      <div className="PlantsContainer">
        <ItemsList items={items} />
        <Route path={`${match.url}/:itemId`} component={DetailPage}/>
      </div>
      // {<ItemForm />}
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, { getItems })(ItemsPage);
