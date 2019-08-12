import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from "../store";
import tickerSaga from './tickerSaga';

function* rootSaga() {
  yield fork(tickerSaga);
}

export const runSaga = () =>
  sagaMiddleware.run(rootSaga);
