import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getItems } from '../actions/items';

import ItemsList from '../components/ItemsList';
// import DetailPage from '../components/DetailPage';
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


// <Switch>
//  <Route path={`${match.url}/:itemId`} component={DetailPage}/>
//  <Route exact path={match.url} render={() => (
//    <h3>Select item on the list</h3>
//  )}/>
// </Switch>


// render() {
//   const { match, items } = this.props;
//   return (
//     <div className="PlantsContainer">
//       <h2>Plantitas</h2>
//       {this.props.items.map(item => < ItemCards key={item.id} item={item} />)}
//     </div>
//     // {<ItemForm />}
//   );
// }
// }
