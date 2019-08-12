import { takeEvery, fork } from 'redux-saga/effects';
import { 
  ADD_OR_UPDATE_BID,
  ADD_OR_UPDATE_ASK,
  DELETE_BID,
  DELETE_ASK,
} from '../actions/orderBookActions';

// Add or Update Bid
function* onAddUpdateBid(action) {
  yield console.log('onAddUpdateBid', action);
}

function* watchAddUpdateBid() {
  yield takeEvery(ADD_OR_UPDATE_BID, onAddUpdateBid);
}

// Add or Update Ask
function* onAddUpdateAsk(action) {
  yield console.log('onAddUpdateAsk', action);
}

function* watchAddUpdateAsk() {
  yield takeEvery(ADD_OR_UPDATE_ASK, onAddUpdateAsk);
}

// Delete Bid
function* deleteBid(action) {
  yield console.log('deleteBid', action);
}

function* watchDeleteBid() {
  yield takeEvery(DELETE_BID, deleteBid);
}

// Delete Ask
function* deleteAsk(action) {
  yield console.log('deleteAsk', action);
}

function* watchDeleteAsk() {
  yield takeEvery(DELETE_ASK, deleteAsk);
}

// Watch Order Book
function* orderBookSaga() {
  yield fork(watchAddUpdateBid);
  yield fork(watchAddUpdateAsk);
  yield fork(watchDeleteBid);
  yield fork(watchDeleteAsk);
}

export default orderBookSaga;
