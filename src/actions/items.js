import { resetItemForm } from './itemForm';

const API_URL = process.env.REACT_APP_API_URL;

// **Action Creators**
const setItems = items => {
  return {
    type: 'GET_ITEMS_SUCCESS',
    items,
  }
}

const addItem = item => {
  return {
    type: 'CREATE_ITEM_SUCCESS',
    item,
  }
}

// **Async Actions**
export const getItems = () => {
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
