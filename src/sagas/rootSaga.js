import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from "../store";
import tickerSaga from './tickerSaga';
import orderBookSaga from './orderBookSaga';

function* rootSaga() {
  yield fork(tickerSaga);
  yield fork(orderBookSaga);
}

export const runSaga = () =>
  sagaMiddleware.run(rootSaga);
