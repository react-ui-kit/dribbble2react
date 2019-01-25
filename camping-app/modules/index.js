import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import campings from './campings';

const middlewares = [thunk];
const store = createStore(
  combineReducers({
    campings: campings,
  }),
  applyMiddleware(...middlewares)
);

export default store;