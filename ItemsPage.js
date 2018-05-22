import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { bindActionCreators } from 'redux'
import { fetchItems } from '../actions/items';
import { deleteItem } from  '../actions/items';

import ItemsList from '../components/ItemsList';
import DetailPage from '../components/DetailPage';
import ItemForm from './ItemForm';
import './Items.css';

class ItemsPage extends Component {

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    const { match, items } = this.props;

    return (
      <div className="PlantsContainer">
        <ItemsList
        items={items}/>
        <Switch>
          <Route path={`${match.url}/new`} component={ItemForm} />
          <Route path={`${match.url}/:itemId`} component={DetailPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchItems: fetchItems,
    deleteItem: deleteItem
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
