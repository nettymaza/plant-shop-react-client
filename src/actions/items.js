import { resetItemForm } from './itemForm';

const API_URL = process.env.REACT_APP_API_URL;

// In Redux Action Creators simply return an Action

// **Action Creators**
const setItems = items => {
  return {
    type: 'FETCH_ITEMS',
    items,
  }
}

const addItem = item => {
  return {
    type: 'ADD_ITEM',
    item,
  }
}

const updateLike = item => {
  return {
    type: 'INCREASE_LIKE',
    item,
  }
}

// const destroyItem = item => {
//   return {
//     type: 'DELETE_ITEM',
//     item,
//   }
// }

// **Async Actions**
export const fetchItems = () => {
  return dispatch => {
    return fetch(`${API_URL}/items`)
      .then(response => response.json())
      .then(items => dispatch(setItems(items)))
      .catch(error => console.log(error));
  }
}

export const createItem = item => {
  return dispatch => {
    return fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: item })
    })
    .then(response => response.json())
    .then(item =>  {
      dispatch(addItem(item))
      dispatch(resetItemForm())
    })
    .catch(error => console.log(error))
  }
}

export const addLike = itemId => {
  return dispatch => {
    return fetch(`${API_URL}/items/${itemId}/like`, {
      method: "POST"
    })
    .then(response => response.json())
    .then(item => {
      dispatch(updateLike(item));
    })
    .catch(error => console.log(error))
  }
}

export const deleteItem = itemId => {
  return dispatch => {
    return fetch(`${API_URL}/items/${itemId}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(item =>  {
      console.log(item)
    })

  }
}
