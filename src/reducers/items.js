export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items;

    case 'CREATE_ITEM_SUCCESS':
      return state.concat(action.item);

    default:
    return state;
  }
}
