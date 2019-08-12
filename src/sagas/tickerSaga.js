import { takeEvery, fork } from 'redux-saga/effects';
import { ON_TICKER_MSG } from '../actions/tickerActions';

function* onTickerMessage(action) {
  yield console.log('onTickerMessage', action);
}

function* watchTickerMessage() {
  yield takeEvery(ON_TICKER_MSG, onTickerMessage);
}

function* tickerSaga() {
  yield fork(watchTickerMessage);
}

export default tickerSaga;
