import { combineReducers } from 'redux';
import items from './items';
import itemFormData from './itemFormData';

// Reducers specify how the application's state changes in response to actions sent to the store.
export default combineReducers({
  items: items,
  itemFormData: itemFormData
});
