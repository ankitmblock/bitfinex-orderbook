import { sagaMiddleware } from "../store";

function* rootSaga() {
  yield console.log('Root saga started');
}

export const runSaga = () =>
  sagaMiddleware.run(rootSaga);
