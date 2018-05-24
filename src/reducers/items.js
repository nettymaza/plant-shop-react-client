// The reducer is a pure function that takes the previous state and an action, and returns the next state.

// Things you should never do inside a reducer:
//
// Mutate its arguments;
//
// Perform side effects like API calls and routing transitions;
//
// Call non-pure functions, e.g. Date.now() or Math.random().


// Items Reducer
export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ITEMS':
      return action.items;

    case 'ADD_ITEM':
      return [...state, action.item];

    case "INCREASE_LIKES":
      return Object.assign({}, state, {
        likes_count: state.likes_count + 1
      });

    default:
      return state;
  }
}

// case 'DELETE_ITEM':
//   const items = state.items.filter(item => item.id !== action.id);
//   return { items };

// return state.concat(action.item);
