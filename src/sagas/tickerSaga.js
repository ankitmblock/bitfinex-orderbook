import { takeEvery, fork, put } from 'redux-saga/effects';
import { ON_TICKER_MSG, saveTickerData } from '../actions/tickerActions';
import { tickerMessageParser } from '../utils/parsers';

function* onTickerMessage({ message }) {
  const parsedMessage = JSON.parse(message);
  
  if (!parsedMessage.event) {
    const [id, data] = parsedMessage;
    if (Array.isArray(data)) {
      const tickerData = tickerMessageParser(data);

      yield put(saveTickerData(tickerData));
    }
  }
}

function* watchTickerMessage() {
  yield takeEvery(ON_TICKER_MSG, onTickerMessage);
}

function* tickerSaga() {
  yield fork(watchTickerMessage);
}

export default tickerSaga;
