export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ITEMS':
      return action.items;

    case 'ADD_ITEM':
      return state.concat(action.item);

    default:
    return state;
  }
}

// export default function itemsReducer(state = { loading: false, items: [] }, action) {
//   switch (action.type) {
//     case 'START_ITEMS_REQUEST':
//       return Object.assign({}, state, {loading: true})
//
//     case 'FETCH_ITEMS':
//       return {loading: false, items: action.items}
//
//     case 'ADD_ITEM':
//       return state.concat(action.item);
//
//     default:
//     return state;
//   }
// }
