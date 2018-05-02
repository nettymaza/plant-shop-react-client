import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk';

import items from './reducers/items';
import itemFormData from './reducers/itemFormData';

const reducers = combineReducers({
  items,
  itemFormData
});
const middleware = [thunk];
// view Intro To Redux Library Codealong
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
