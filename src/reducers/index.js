import { combineReducers } from 'redux';
import orderBook from './orderBook';
import ticker from './ticker';

const reducers = {
  orderBook,
  ticker,
};

export default combineReducers(reducers);
