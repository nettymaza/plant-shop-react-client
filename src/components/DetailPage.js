import React from 'react';
import { connect } from 'react-redux';

const DetailPage = ({ item }) => {

  return (
    <div>
      <h3>Items Show Component!</h3>
      <h3>{item.name}</h3>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const item = state.items.find(item => item.id === ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

export default connect(mapStateToProps  )(DetailPage);
