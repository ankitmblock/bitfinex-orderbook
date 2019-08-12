import { combineReducers } from 'redux';
import orderBook from './orderBook';

const reducers = {
  orderBook,
};

export default combineReducers(reducers);
